// import img from "../assets/m.jpg" 
// import "../components/About.scss"
// import CodeEditor from "./CodeEditor";

// function About() {
//   return (
//     <div id="about">
//       <h1 className="about-title">Who I Am</h1>

//       <div className="about">
//         <main>
//           <div className="container">
//             <div className="headerContainer">
//               <span className="redCircle"></span>
//               <span className="yellowCircle"></span>
//               <span className="greenCircle"></span>
//             </div>
//             <CodeEditor />
//           </div>
//         </main>

//         <aside>
//           <div className="box">
//             <div className="pictureCard">
//               <div className="imgBx">
//                 <img src={img} alt="MyImage" />
//               </div>
//               <div className="details">
//                   <h2>Mobina Karimi<br/>
//                   <span>Front-end Developer</span></h2>
//               </div>
//             </div>
//           </div>
//         </aside>
//       </div>
//     </div>
//   );
// }

// export default About;

import React from "react";
import { motion } from "framer-motion";
import img from "../assets/m.jpg";
import "../components/About.scss";
import CodeEditor from "./CodeEditor";

function About() {
  // وریانت برای تمامی عناصر (پنهان و نمایان شدن با حرکت به بالا)
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div id="about">
      {/* افکت برای متن عنوان */}
      <motion.h1
        className="about-title"
        initial="hidden"
        whileInView="visible"
        variants={variants}
        viewport={{ once: true, amount: 0.5 }}
      >
        Who I Am
      </motion.h1>

      <div className="about">
        <main>
          {/* افکت برای کانتینر اصلی */}
          <motion.div
            className="container"
            initial="hidden"
            whileInView="visible"
            variants={variants}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="headerContainer">
              <span className="redCircle"></span>
              <span className="yellowCircle"></span>
              <span className="greenCircle"></span>
            </div>
            <CodeEditor />
          </motion.div>
        </main>

        <aside>
          {/* افکت برای باکس کارت‌ها */}
          <motion.div
            className="box"
            initial="hidden"
            whileInView="visible"
            variants={variants}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="pictureCard">
              <div className="imgBx">
                <motion.img
                  src={img}
                  alt="MyImage"
                  initial={{ scale: 1.01 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <div className="details">
                <motion.h2
                  initial="hidden"
                  whileInView="visible"
                  variants={variants}
                  viewport={{ once: true }}
                >
                  Mobina Karimi<br />
                  <motion.span
                    initial="hidden"
                    whileInView="visible"
                    variants={variants}
                  >
                    Front-end Developer
                  </motion.span>
                </motion.h2>
              </div>
            </div>
          </motion.div>
        </aside>
      </div>
    </div>
  );
}

export default About;

