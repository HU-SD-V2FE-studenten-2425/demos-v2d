import "./fc-footer"
import "./fc-repaircard"
import "./fc-header"
import FakeRepairService from "./services/repair-service";

let service = new FakeRepairService();
let card = document.querySelector('fc-repaircard');

card.loading = true;
service.fetchCard("372251").then(r => {
    card.code = r.number;
    card.customer = r.customer;
    card.loading = false;
});