﻿// MIT License
//
// Copyright (c) 2020-2022 百小僧, Baiqian Co.,Ltd and Contributors
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

namespace Furion.Schedule;

/// <summary>
/// 作业触发器抽象父类
/// </summary>
[SuppressSniffer]
public abstract class JobTriggerBase : JobTrigger
{
    /// <summary>
    /// 计算下一个触发时间
    /// </summary>
    /// <param name="startAt">起始时间</param>
    /// <returns><see cref="DateTime"/>?</returns>
    public abstract DateTime GetNextOccurrence(DateTime startAt);

    /// <summary>
    /// 执行条件检查
    /// </summary>
    /// <param name="checkTime">受检时间</param>
    /// <returns><see cref="bool"/></returns>
    public virtual bool ShouldRun(DateTime checkTime)
    {
        return NextRunTime.Value < checkTime
            && LastRunTime != NextRunTime;
    }

    /// <summary>
    /// 作业触发器转字符串输出
    /// </summary>
    /// <returns><see cref="string"/></returns>
    public abstract new string ToString();

    /// <summary>
    /// 记录运行信息和计算下一个触发时间及休眠时间
    /// </summary>
    internal void Increment()
    {
        NumberOfRuns++;
        LastRunTime = NextRunTime;

        if (NextRunTime != null)
        {
            var startAt = NextRunTime.Value;
            NextRunTime = GetNextOccurrence(startAt);
            SleepMilliseconds = (NextRunTime.Value - startAt).TotalMilliseconds;
        }
        else
        {
            SleepMilliseconds = null;
        }
    }

    /// <summary>
    /// 记录错误次数
    /// </summary>
    internal void IncrementErrors()
    {
        NumberOfErrors++;

        // 如果错误次数大于最大错误数，则表示该触发器是奔溃状态
        if (MaxNumberOfErrors > 0 && NumberOfErrors >= MaxNumberOfErrors)
        {
            Status = JobTriggerStatus.Panic;
        }
        // 否则是就绪（错误状态）
        else
        {
            Status = JobTriggerStatus.ErrorToReady;
        }
    }

    /// <summary>
    /// 执行条件检查（内部检查）
    /// </summary>
    /// <param name="checkTime">受检时间</param>
    /// <returns><see cref="bool"/></returns>
    internal bool InternalShouldRun(DateTime checkTime)
    {
        // 状态检查
        if (Status != JobTriggerStatus.Ready
            && Status != JobTriggerStatus.ErrorToReady
            && Status != JobTriggerStatus.Blocked)  // 本该执行但是没有执行
        {
            return false;
        }

        // 开始时间和结束时间检查
        if ((StartTime != null && StartTime.Value > checkTime)
            || (EndTime != null && EndTime.Value < checkTime))
        {
            return false;
        }

        // 下一次运行时间空判断
        if (NextRunTime == null || SleepMilliseconds == null || SleepMilliseconds < 0)
        {
            return false;
        }

        // 最大次数判断
        if (MaxNumberOfRuns == 0 || (MaxNumberOfRuns != -1 && NumberOfRuns >= MaxNumberOfRuns))
        {
            return false;
        }

        // 最大错误数判断
        if (MaxNumberOfErrors > 0 && NumberOfErrors >= MaxNumberOfErrors)
        {
            return false;
        }

        // 调用派生类 ShouldRun 方法
        return ShouldRun(checkTime);
    }
}