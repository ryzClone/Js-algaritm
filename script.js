
const button = document.getElementById('btn');
const delated = document.querySelector('.delete');

delated.addEventListener('click',()=>{
    document.getElementById('inputes').value="";
    document.getElementById('demo').innerHTML = '';
})

button.addEventListener('click', () => {

    let textura = document.getElementById('inputes').value;
    const ScopLeft = ")";
    const ScopRight = "(";
    const Arr = [];

    for (i = 0; i < textura.length; i++) {
        Arr.push(textura[i])
    }

    if (textura[0] == ScopLeft) {
        document.getElementById('demo').innerHTML = 'false'
        document.getElementById('demo').style.color="red"
    } else if (textura.length % 2 != 0) {
        document.getElementById('demo').style.color="red"
        document.getElementById('demo').innerHTML = 'false';

    }
    for (let x = 0; x < textura.length / 2; x++) {
        if (Arr[0] == ScopRight) {
            for (let i = 1; i < textura.length + 1; i++) {
                if (Arr[i] == ScopLeft) {
                    Arr.splice(0, 1);
                    Arr.splice(i - 1, 1)
                    break;
                } else {
            document.getElementById('demo').style.color="red"
                    document.getElementById('demo').innerHTML = 'false';
                }
            }
        } else {
            document.getElementById('demo').style.color="red"
            document.getElementById('demo').innerHTML = 'false';

        }
        if (Arr.length == 0) {
            document.getElementById('demo').style.color="green"
            document.getElementById('demo').innerHTML = 'true';

        }
    }


})