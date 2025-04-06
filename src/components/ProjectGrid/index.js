import { Grid } from "@mui/material";
import ProjectCard from "./ProjectCard";

const projectsArr = [
    {
        title: "Attendence Management System",
        description: "Project to record attendance efficiently"
    },
    {
        title: "HMRITM Racing Team",
        description: "Responsive website for college Racing team"
    }
]

const ProjectGrid = ()=>{
    return (<Grid container item spacing={2} mt={10} justifyContent='center'>
        {projectsArr?.map((p)=>(
            <Grid item>
                <ProjectCard data={p} />
            </Grid>
        ))}
    </Grid>)
}

export default ProjectGrid;