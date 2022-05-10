import Page from "./Page";

type Member = {
    name: string,
    role: string
}

type Committee = {
    name: string,
    image: string,
    imageDesc: string,
    members: Member[]
}

const Precursor = ({precursor}: {precursor: Committee} ) => {
    
    return (
        <div className="fixed w-screen h-screen overflow-hidden flex flex-col items-center bg-cover" style={{backgroundImage: "url('/img/nollkit21sky.jpg')"}}>
            <div className="w-[113%] h-full flex flex-col bg-opacity-90 bg-black justify-center">
                <div className="patet-info drop-sh flex flex-row justify-evenly max-h-[80%] items-center">
                    <div className="imagebox max-w-1/3 border-4 overflow-auto" style={{backgroundImage:`url('${precursor.image}')`}}></div>
                    <div className="committee-desc">
                        <h1 className="text-white text-3xl font-bold">{precursor.name}</h1>
                        <p className="text-white text-xl">{precursor.imageDesc}</p>
                        {precursor.members.map((member, index) => (
                            <div key={index} className="member-info">
                                <span>
                                    {member.name}: {member.role}
                                </span>
                            </div>
                        ))}
                    </div>
                   
                </div>
            </div>
        </div>
    )
}



export default Precursor;