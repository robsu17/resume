import Skills from './Skills'
import Education from './Education'
import Contacts from './Contacts'
import Awards from './Awards'
function Sidebar () {
    return (
        <aside className="flex-none w-56 p-4 pt-0">
            <div className="border-r border-neutral-300 h-full mt-4 flex flex-col gap-4">
                <Contacts/>
                <Education/>               
                <Awards/>
                <Skills/>                
            </div>
        </aside>
    )
}

export default Sidebar