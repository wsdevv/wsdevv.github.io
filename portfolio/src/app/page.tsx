'use client';
import Navigator from '@/components/navigator/navigator'
import styles from './page.module.css'
import { useState } from 'react';
import { PageFrontData } from '@/components/lib';
import { DirList } from './directorylist';
import InfoTab from '@/components/tab/tab';

export default function Home() {

  // used to set to the hovered tabs directory object
  let [hovered, setHovered] = useState({} as PageFrontData);

  let [selected, setSelected] = useState({} as PageFrontData);


  // contains the "directories" or tabs you can navigate to in the application
  // contains title of tab, the background the tab renders on the page, and the svg the tab renders. 
  let [directories, setDirectories] = useState(DirList);
  
  return (
    <div>
    
      <Navigator hoveredObjState={hovered} 
                 setHoveredObjState={setHovered} 
                 selectedObjState={selected}
                 setSelectedObjState={setSelected}
                 dirState={directories} 
                 setDirState={setDirectories} />
      
      <InfoTab tabname={selected.title} tabContents={selected.contents}/>

      <img id="background" className={styles.imbackground} src={hovered.backgroundImage} />
      <object type="text/html" className={styles.background} data={hovered.backgroundRender} />
      

     
    </div>
  )
}
