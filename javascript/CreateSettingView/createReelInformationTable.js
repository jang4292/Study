function createReelInformationTable() {
    const container = document.createElement('div');
    container.id = 'reelInforContainer';
    container.style.cssText = 'float: right;background-color:white; border: 5px solid #92acbb; padding : 5px';
    container.style.width = '300px';
    container.style.height = '200px';
    document.body.appendChild(container);

    const checkBox = document.createElement('input');
    checkBox.id = 'containerCheckBox';
    checkBox.style.cssText = 'float: right;background-color:white; border: 5px solid #92acbb; padding : 5px';
    checkBox.style.width = '30px';
    checkBox.style.height = '30px';
    checkBox.type = 'checkbox';
    checkBox.checked = 'true';

    checkBox.addEventListener('click', () => {
        if (checkBox && checkBox.checked) {
            container.style.display = 'block';
        } else {
            container.style.display = 'none';
        }
    });

    document.body.appendChild(checkBox);

    function create(_this, container, name, value) {
        const row = document.createElement('div');
        row.style.width = '90%';
        row.style.height = '12%';
        row.style.marginLeft = '5%';
        row.style.marginRight = '5%';
        row.style.borderColor = '#000000';
        row.style.border = 'solid';
        row.style.borderWidth = '1px';
        container.appendChild(row);

        const spinTimeText = document.createTextNode(name);
        spinTimeText.float = 'left';
        spinTimeText.width = '10%';
        spinTimeText.height = '100%';
        spinTimeText.marginRight = '5%';
        row.appendChild(spinTimeText);

        const input = document.createElement('input');
        input.id = name;
        input.float = 'right';
        input.style.width = '10%';
        input.height = '100%';
        input.style.marginLeft = '5%';
        input.setAttribute('name', name);
        input.setAttribute('value', value);

        input.addEventListener('focusin', () => {
            _this.canSpin = false;
        });
        input.addEventListener('focusout', () => {
            _this.canSpin = true;
        });

        row.appendChild(input);
    }

    create(this, container, 'SPIN_TIME_PER_SLOT', 0);
    create(this, container, 'DEFAULT_SYMBOLS', 0);
    create(this, container, 'ADD_SYMBOLS', 0);
    create(this, container, 'GOZO_ADD_SYMBOLS', 0);
    create(this, container, 'COIN_DURATION', 0);
    create(this, container, 'PLUS_DURATION', 0);
    create(this, container, 'RATE_OF_SHOWN_COIN', 0);

    create = null;

    const btnSubmit = document.createElement('button');
    btnSubmit.innerText = 'submit';
    btnSubmit.style.width = '35%';
    btnSubmit.style.marginLeft = '10%';
    btnSubmit.style.marginRight = '5%';
    btnSubmit.onclick = (() => {
        const temp0 = parseFloat(document.getElementById('SPIN_TIME_PER_SLOT').value);
        const temp1 = parseInt(document.getElementById('DEFAULT_SYMBOLS').value);
        const temp2 = parseInt(document.getElementById('ADD_SYMBOLS').value);
        const temp3 = parseInt(document.getElementById('GOZO_ADD_SYMBOLS').value);
        const temp4 = parseFloat(document.getElementById('COIN_DURATION').value);
        const temp5 = parseFloat(document.getElementById('PLUS_DURATION').value);
        const temp6 = parseInt(document.getElementById('RATE_OF_SHOWN_COIN').value);
    });

    container.appendChild(btnSubmit);

    const btnReset = document.createElement('button');
    btnReset.innerText = '-';
    btnReset.style.width = '35%';
    btnReset.style.marginLeft = '5%';
    btnReset.style.marginRight = '10%';
    container.appendChild(btnReset);
}