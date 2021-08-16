﻿// Copyright (c) 2020-2021 百小僧, Baiqian Co.,Ltd.
// Furion is licensed under Mulan PSL v2.
// You can use this software according to the terms and conditions of the Mulan PSL v2.
// You may obtain a copy of Mulan PSL v2 at:
//             http://license.coscl.org.cn/MulanPSL2
// THIS SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT, MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE.
// See the Mulan PSL v2 for more details.

using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

namespace Furion.Tools.CommandLine
{
    /// <summary>
    /// Cli 初始化
    /// </summary>
    public static partial class Cli
    {
        /// <summary>
        /// 输入参数信息
        /// </summary>
        internal static Arguments Arguments { get; set; }

        /// <summary>
        /// 参数处理程序
        /// </summary>
        internal static Dictionary<string, Action<ArgumentMetadata>> ArgumentHandlers { get; set; }

        /// <summary>
        /// 静态构造函数
        /// </summary>
        static Cli()
        {
            // 填充参数信息
            Fill();
        }

        /// <summary>
        /// 填充参数信息
        /// </summary>
        private static void Fill()
        {
            // 如果已经填充过，不再重新解析
            if (ArgumentMetadatas != null) return;

            // 获取入口类型
            TypeInfo entryType = GetEntryType();

            // 填充当前属性值
            Arguments.Populate(entryType);

            // 获取传递参数字典
            Arguments = Arguments.Parse(u =>
            {
                u.TargetType = entryType;
            });
            var argumentDictionary = Arguments.ArgumentDictionary;

            // 解析定义参数集合
            ArgumentMetadatas = Arguments.GetArgumentInfo(entryType)
                                                                 .Select(u => new ArgumentMetadata
                                                                 {
                                                                     HelpText = u.HelpText,
                                                                     IsCollection = u.IsCollection,
                                                                     LongName = u.LongName,
                                                                     ShortName = u.ShortName,
                                                                     Property = u.Property,
                                                                     IsTransmission = argumentDictionary.ContainsKey(u.ShortName.ToString()) || argumentDictionary.ContainsKey(u.LongName),
                                                                     Value = argumentDictionary.ContainsKey(u.ShortName.ToString())
                                                                        ? argumentDictionary[u.ShortName.ToString()]
                                                                        : (argumentDictionary.ContainsKey(u.LongName)
                                                                                ? argumentDictionary[u.LongName]
                                                                                : default)
                                                                 });

            ArgumentHandlers = ScanArgumentHandlers();
        }

        /// <summary>
        /// 扫描所有静态定义处理方法
        /// </summary>
        private static Dictionary<string, Action<ArgumentMetadata>> ScanArgumentHandlers()
        {
            var arugmentHandlers = new Dictionary<string, Action<ArgumentMetadata>>();

            // 查找所有 static 静态方法且带 Handler 结尾的方法且没有返回值
            var methodHandlers = GetEntryType().DeclaredMethods
                                                              .Where(u => u.IsStatic
                                                                       && u.Name.EndsWith("Handler")
                                                                       && u.ReturnType == typeof(void)
                                                                       && u.GetParameters().Length == 1
                                                                       && u.GetParameters()[0].ParameterType == typeof(ArgumentMetadata));
            foreach (var method in methodHandlers)
            {
                var propertyName = method.Name[0..^7];
                arugmentHandlers.Add(propertyName, (Action<ArgumentMetadata>)Delegate.CreateDelegate(typeof(Action<ArgumentMetadata>), method));
            }

            return arugmentHandlers;
        }

        /// <summary>
        /// 获取入口类型
        /// </summary>
        /// <returns></returns>
        private static TypeInfo GetEntryType()
        {
            return Assembly.GetEntryAssembly().DefinedTypes.First(u => u.Name == "Program");
        }
    }
}