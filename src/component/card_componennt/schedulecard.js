
function Schedulecard(props) {
    return (
        <div className="card mt-7  overflow-hidden" style={{borderRadius:"10px 0px 0px 10px"}}>
            <div className="card-body pl-0 pt-0 pb-0 d-flex">
                <div style={{background:"#6c757d",height:"160px",width:"4%"}}>
                </div>
                <div className="ml-4 my-3">
                    <h4 className="title text-2xl" style={{fontWeight:"500"}}>{props.title}</h4>
                    <div className="time">
                        <p className="from mt-3">
                        From: {props.datefrom}
                        </p>
                        <p className="to mt-3">
                        To:  {props.dateto}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Schedulecard;