Promise.delay = (ms) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}


export default class FakeRepairService {
    fetchCard(number){
        return Promise.delay(1000).then(()=> ({
            number,
            receiver: {
                firstName: "Bob",
                lastName: "deVries"
            }              
        }));
    }
}


export class ApiRepairService {
    fetchCard(number){
        return fetch(`https://api.bla.bla/repaircards/${number}`).then(r => r.json());
    } 
}