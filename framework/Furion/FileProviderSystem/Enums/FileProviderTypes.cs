﻿using System.ComponentModel;

namespace Furion.FileProviderSystem
{
    /// <summary>
    /// 文件提供器类型
    /// </summary>
    [Description("文件提供器类型")]
    public enum FileProviderTypes
    {
        /// <summary>
        /// 物理文件
        /// </summary>
        [Description("物理文件")]
        Physical,

        /// <summary>
        /// 嵌入式文件
        /// </summary>
        [Description("嵌入式文件")]
        Embedded
    }
}