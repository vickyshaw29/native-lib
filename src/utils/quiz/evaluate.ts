import {ConditionDataT} from '../../interfaces/QuizInterface'

export function evaluateCondition(condition: ConditionDataT, context?: any) {

    // let value1Computed;
    // let value2Computed;

    // if (typeof condition.value1 === 'string') {
    //     if (condition.value1.startsWith("$GLOBALSTORE.")) {
    //         let keyWithoutRootPath = condition.value1.substr(12);
    //         value1Computed = lodash.get(globalStore, keyWithoutRootPath)
    //     } else if (condition.value1.startsWith("$CONTEXT.")) {
    //         if(context){
    //             let keyWithoutRootPath = condition.value1.substr(9);
    //             value1Computed = lodash.get(context, keyWithoutRootPath)
    //         }else{
    //             value1Computed =  null
    //         }
    //     } else {
    //         value1Computed = condition.value1
    //     }
    // } else {
    //     value1Computed = condition.value1
    // }

    // if (typeof condition.value2 === 'string') {
    //     if (condition.value2.startsWith("$GLOBALSTORE.")) {
    //         let keyWithoutRootPath = condition.value2.substr(12);
    //         value2Computed = lodash.get(globalStore, keyWithoutRootPath)
    //     } else if (condition.value2.startsWith("$CONTEXT.")) {
    //         if(context){
    //             let keyWithoutRootPath = condition.value2.substr(8);
    //             value2Computed = lodash.get(context, keyWithoutRootPath)
    //         }else{
    //             value2Computed =  null
    //         }
    //     } else {
    //         value2Computed = condition.value2
    //     }
    // } else {
    //     value2Computed = condition.value2
    // }



    // if (condition.type === "=") {
    //     if (Array.isArray(value1Computed)) {
    //         value1Computed = value1Computed[0]
    //     }
    //     return value1Computed === value2Computed
    // }
    // if (condition.type === "!=") {
    //     if (Array.isArray(value1Computed)) {
    //         value1Computed = value1Computed[0]
    //     }
    //     return value1Computed !== value2Computed
    // }
    // if (condition.type === ">") {
    //     if (Array.isArray(value1Computed)) {
    //         value1Computed = value1Computed[0]
    //     }
    //     return value1Computed > value2Computed
    // }
    // if (condition.type === ">=") {
    //     if (Array.isArray(value1Computed)) {
    //         value1Computed = value1Computed[0]
    //     }
    //     return value1Computed >= value2Computed
    // }
    // if (condition.type === "<") {
    //     if (Array.isArray(value1Computed)) {
    //         value1Computed = value1Computed[0]
    //     }
    //     return value1Computed < value2Computed
    // }
    // if (condition.type === "<=") {
    //     if (Array.isArray(value1Computed)) {
    //         value1Computed = value1Computed[0]
    //     }
    //     return value1Computed <= value2Computed
    // }
    // if (condition.type === "in") {
    //     return lodash.includes(value1Computed, value2Computed)
    // }

    return true

}


export function evaluateConditions(conditions: ConditionDataT[], context?: any) {


    if (Array.isArray(conditions)) {

        for (const condition of conditions) {
            if (!evaluateCondition(condition, context)) {

                return false;
            }
        }

        return true;

    } else {
        return conditions
    }

}