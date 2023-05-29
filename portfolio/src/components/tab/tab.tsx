'use client';
import { ReactNode, useEffect } from "react";
import styles from "./tab.module.css";
import navstyles from "../navigator/navigator.module.css";
interface InfoTabAttributes {
    tabname: string, 
    tabContents: ReactNode
}
export default function InfoTab(attributes: InfoTabAttributes) { 
    
    useEffect(()=> {
        let it = document.getElementById("infotab");
        let ea = document.getElementById("expandArrow");
        let nv = document.getElementById("navigator");
        if (!it || !ea || !nv) return;   
        if (attributes.tabname && nv.classList.contains(navstyles.opentab)) {
                it.classList.add(styles.open);
                ea.style.opacity = "1";
        } 
                   
        
    })

    function closeTab() {
        let it = document.getElementById("infotab");
        let ea = document.getElementById("expandArrow");
        let nv = document.getElementById("navigator");
        if (!it || !ea || !nv) return;  
        if (it.classList.contains(styles.open)) {
            it.classList.remove(styles.open);
            nv.classList.remove(navstyles.opentab);
            ea.style.transform = "translate(-50%, -50%) rotate(0deg)";
        } else {
            it.classList.add(styles.open);
            nv.classList.add(navstyles.opentab);
            ea.style.transform = "translate(-50%, -50%) rotate(180deg)";
        }
    }

    return ( 
        <div id="infotab" className={styles.tab}>
          
           <div id="infoTabBackground" className={styles.infoTabBackground}> 
                <div id="contents" className={styles.infoTabContents}> 
                    {attributes.tabContents}
                </div> 
           </div>

           <img id="expandArrow" className={styles.expandArrow} onClick={closeTab} src="top-arrow-circle-svgrepo-com.svg"/>
        </div>
    )
}