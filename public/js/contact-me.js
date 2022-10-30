function showData() {
    let showName = document.getElementById('input-name').value;
    let showEmail = document.getElementById('input-email').value;
    let showPhone = document.getElementById('input-phone').value;
    let showSubject = document.getElementById('input-subject').value;
    let showMessage = document.getElementById('input-message').value;

    console.log(showName);
    console.log(showEmail);
    console.log(showPhone);
    console.log(showSubject);
    console.log(showMessage);

    if (showName == '') {
        return alert('Nama harus diisi')
    } else if (showEmail == '') {
        return alert('Email harus diisi')
    } else if (showPhone == '') {
        return alert('Nomor telfon harus diisi')
    } else if (showSubject == '') {
        return alert('Subject harus diisi')
    } else if (showMessage == '') {
        return alert('Message harus diisi')
    }

    let emailReciever = 'rizkyabdulah.business@gmail.com'

    let a = document.createElement('a');
    a.href = `mailto:${emailReciever}?subject:${showSubject}&body= Hello, my name is ${showName}, ${showEmail}, ${showPhone}, ${showSubject},${showMessage}, `

    a.click()
}