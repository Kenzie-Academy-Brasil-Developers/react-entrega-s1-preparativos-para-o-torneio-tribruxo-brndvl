import { StudentsCards } from "../StudentsCard"

export const Students = ({choiceStudents}) => {
    return(
        <>
            {choiceStudents.map((students, index) => 
            <StudentsCards 
            key={index}
            students={students}/>
        
        )}
        
        </>
    )
}