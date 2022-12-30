var data = new Date();

// alert('A data atual é: ' + data.toLocaleDateString());

var dataAtual = document.querySelector("#data");

function formatDate(date, format) {
    const map = {
        mm: date.getMonth() + 1,
        dd: date.getDate(),
        aa: date.getFullYear().toString().slice(-4),
        aaaa: date.getFullYear()
    }

    return format.replace(/mm|dd|aa|aaaa/gi, matched => map[matched])
}

dataAtual.value = formatDate(data, 'aa-mm-dd');