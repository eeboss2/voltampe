"use client"
import { useState, useEffect } from "react";
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import ReactSkillBar from 'react-skillbars';

// 添加技能条的自定义样式
const colors = {
  bar: '#04a9e3',
  background: '#043452'
};

const SkillBarItem = ({countUp}) => {
    const [skillBar, setSkillBar] = useState(false);
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: false
    });

    useEffect(() => {
        if (inView) {
            setSkillBar(true);
        } else {
            setSkillBar(false);
        }
    }, [inView]);

    const skillLevel = [
        { type: 'one', level: countUp }
    ];
    
    return (
        <div ref={ref} className="skill__area-item-inner">
            {skillBar && <ReactSkillBar skills={skillLevel} height={10} animationDuration={2000} colors={colors} />}
            <span className="skill__area-item-count">
                <span>{skillBar && <CountUp start={0} end={countUp} duration={4} delay={1}></CountUp>}</span>%
            </span>
        </div>
    );
};

export default SkillBarItem;