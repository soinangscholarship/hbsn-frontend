import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./AnimatedSun.css";

const AnimatedSun = () => {
  const [raysVisible, setRaysVisible] = useState(false);
  const [sunVisible, setSunVisible] = useState(false);

  useEffect(() => {
    // 1️⃣ Bắt đầu bay tia sáng
    const timer1 = setTimeout(() => setRaysVisible(true), 300);
    // 2️⃣ Sau khi tia sáng hội tụ thì mặt trời hiện ra
    const timer2 = setTimeout(() => setSunVisible(true), 2600);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="sun-container">
      {[...Array(12)].map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        const distance = 400; // khoảng cách bay vào từ ngoài
        const startX = Math.cos(angle) * distance;
        const startY = Math.sin(angle) * distance;

        return (
          <motion.div
            key={i}
            className={`sun-ray ray-${i}`}
            initial={{
              x: startX,
              y: startY,
              opacity: 0,
              scale: 0.3,
              rotate: i * 30,
            }}
            animate={
              raysVisible
                ? {
                    x: 0,
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    rotate: i * 30 + 15, // quay nhẹ
                  }
                : {}
            }
            transition={{
              duration: 2,
              delay: i * 0.08,
              ease: "easeOut",
            }}
          />
        );
      })}

      {/* Mặt trời hiện ra sau khi tia sáng tập hợp */}
      <motion.div
        className="sun"
        initial={{ scale: 0, opacity: 0 }}
        animate={
          sunVisible
            ? {
                scale: [0, 1.3, 1],
                opacity: 1,
                rotate: 360,
              }
            : {}
        }
        transition={{
          duration: 2,
          ease: "easeOut",
        }}
      />

      {sunVisible && (
        <motion.div
          className="sun-glow"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}
    </div>
  );
};

export default AnimatedSun;
