'use client';
import { Dispatch, SetStateAction, SyntheticEvent, useState } from "react";
import styles from "./navigator.module.css";
import tabstyles from "../tab/tab.module.css";
import { PageFrontData } from "../lib";

// interface declared for the 
interface NavigatorAttributes { 
    hoveredObjState: PageFrontData, 
    setHoveredObjState: Dispatch<SetStateAction<PageFrontData>>, 

    selectedObjState: PageFrontData, 
    setSelectedObjState: Dispatch<SetStateAction<PageFrontData>>, 

    dirState:    PageFrontData[], 
    setDirState: Dispatch<SetStateAction<PageFrontData[]>>
}

export default function Navigator(attributes: NavigatorAttributes) {
    let [clickedState, setClickedState] = [attributes.selectedObjState, attributes.setSelectedObjState];
    
    let [hoveredState, sethoveredState] = useState(-1);
    let [dirState, setDirState] = [attributes.dirState, attributes.setDirState];
    let [hoveredObjState, sethoveredObjState] = [attributes.hoveredObjState, attributes.setHoveredObjState];
    
    // add hovered state when mouse is hovering over a directory title
    // also set image and svg state to the current image initialized in the directory object (declared in "page.tsx")
    const hover = (e: SyntheticEvent, bgRender: string, index: number) => {
       
       e.currentTarget.classList.add(styles.hovered);
       e.currentTarget.classList.remove(styles.unhovered);
       let bg = document.getElementById("background");
       if (bg) { 
        bg.style.opacity = "1";
        //bg.style.backgroundPositionY = "0%";
       }
       sethoveredState(index);
       sethoveredObjState(dirState[index]);
    }

    // remove hovered class and set the current hovered to unhovered when mouse is out of a directory title
    // also sets svg state to "" to remove background image
    const out = (e: SyntheticEvent) => {
        let nav = document.getElementById("navigator");
        let bg = document.getElementById("background");
        
        // if the title of the cached clicked directory is the same as the current hover title, return
        // because we don't want the current clicked directory (with its tab open) to shrink
        if (clickedState.title==dirState[hoveredState].title) return;

        e.currentTarget.classList.remove(styles.hovered);
        e.currentTarget.classList.add(styles.unhovered);
        
        // basically makes it so that if a tab is open, switch back to the tabs directories background after hovering on
        // another directory title
        if (nav?.classList.contains(styles.opentab)) {
            sethoveredObjState(clickedState);
            return
        };

       
      
        
        
        if (bg) { 
            bg.style.opacity = "0";
            //bg.style.backgroundPositionY = "50px";
        }
        

        sethoveredState(-1);
        sethoveredObjState({ 
            title: "",
            backgroundRender: "",
            backgroundImage: hoveredObjState.backgroundImage
        } as PageFrontData);
    }

    // move navigation up when clicked
    const openTab = (e: SyntheticEvent) => {
        let it = document.getElementById("infotab");
        let nv = document.getElementById("navigator");
        if (!it || !nv) return;  
        setClickedState(hoveredObjState);
        it.classList.add(tabstyles.open);
        nv.classList.add(styles.opentab);
       
    }

    return (
        <nav id="navigator" className={styles.navigator}>
                
                {
                    // iterate through state objects and render them based on whether they are hovered or not
                    dirState.map((element, index) => (
                        
                        <div key={"navItem"+index}>
                          
                            {
                                
                                (hoveredState === index || element.title === clickedState.title) ? 
                                    <div 
                                        className={styles.hovered}
                                        onClick={openTab} 
                                        onMouseOver={(elm) => {hover(elm, element.backgroundRender, index)}}  
                                        onMouseOut={out}> 
                                            {element.title} 
                                    </div> 
                                    :
                                    <div 
                                        className={styles.unhovered}
                                        onClick={openTab} 
                                        onMouseOver={(elm) => {hover(elm, element.backgroundRender, index)}} 
                                        onMouseOut={out}> 
                                            {element.title} 
                                    </div> 


                            }
                        </div>
                    ))
                }
        </nav>
    );
}