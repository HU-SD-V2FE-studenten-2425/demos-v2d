import "./fc-footer"
import "./fc-repaircard"
import "./fc-header"
import "./edit-string"

let card = document.querySelector('fc-repaircard');

card.code = "372251";

card.addEventListener('code-changed', e => {
    console.log('hoor ik een change?', e)
})