import { useParams,useNavigate } from "react-router-dom";
import { useState, useEffect}  from "react";

export default function UpdateTask () {
    const [loading,setLoading] = useState(true);
    const [fetchedTask, setFetchedTask] = useState();
    const [title,setTitle] = useState('');
    const [time,setTime] = useState('');
    const [description,setDescription] = useState('');

    const params = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        async function getTask(){
           const res = await fetch(`/api/v1/tasks/${params._id}`).then(res=> res.json());
           setFetchedTask(res.task);
           setLoading(false);
        }
        getTask();
    }, [loading])

    const onSubmit = async (e) =>{
        e.preventDefault();
        const res = await fetch(`/api/v1/tasks/${params._id}`,{ 
            method:"PATCH",
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({
                title:`${title}`,
                description:`${description}`,
                time:`${time}`,
            }), }).then(res=>res.json()).catch(err=>console.log(err));
            alert(`${res.msg}`);
            navigate('/',{ replace: true });
    }

    return(
        <h1>
            {loading ? <p>loading...</p> : 
            <form onSubmit={onSubmit}>
                <div className="NewTask">
                <input
                    type="text"
                    placeholder={fetchedTask.title}
                    id="NewTitle"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                </div>
                <div className="NewTask">
                <input
                    type="text"
                    placeholder={fetchedTask.time}
                    id="TaskTime"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                />
                </div>
                <div className="NewTask">
                <input
                    type="text"
                    placeholder={fetchedTask.description}
                    id="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                </div>
                <input className="submitButton" type="submit" value="save" />
            </form>}
        </h1>
    )
}