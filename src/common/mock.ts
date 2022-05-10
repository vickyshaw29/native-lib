

export const addPoints = ()=>{
    return;
}

export const registerLinkReport=(linkHash:number,val:string)=>{
    console.warn("triggered registerLinkReport !",val)
}

export const notifyPointWithPopup=()=>{
    console.warn("triggering notifyPointWithPopup !")
}
export const registerQuizReport=()=>{
    console.warn("registering quiz report !")
}
export let globalStore={
    activeLearner:{
        learnerReport:{
            linkReports:true,
            quizResults:""
        },
        registerLinkReport:()=>{},
        addPoints:()=>{}
    },
    activeApp:{
        appId:'GEOX',
        masters:{
            quiz:""
        }
    },

}