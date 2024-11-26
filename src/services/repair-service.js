Promise.delay = (ms) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}


export default class FakeRepairService {
    fetchCard(number){
        return Promise.delay(500).then(()=> ({
            number              
        }));
    }
}