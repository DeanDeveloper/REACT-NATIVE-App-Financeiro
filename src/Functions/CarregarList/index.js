
const listagem = [
    {
        id: 1,
        description: 'Boleto conta de luz',
        card: 'Nubank',
        value: '200.47',
        date: '22/09/2022',
        time: '12:14:35',
        type: 0
    },
    {
        id: 2,
        description: 'Supermecado',
        card: 'Nubank',
        value: '600.80',
        date: '24/09/2022',
        time: '12:14:35',
        type: 0
    },
    {
        id: 3,
        description: 'Salário',
        card: 'Nubank',
        value: '7.400',
        date: '25/09/2022',
        time: '12:14:35',
        type: 1
    },
    {
        id: 4,
        description: 'Boleto conta de água',
        card: 'Inter',
        value: '58.26',
        date: '27/09/2022',
        time: '12:14:35',
        type: 0
    },
    {
        id: 5,
        description: 'Ganhou na MegaSena',
        card: 'Nubank',
        value: '15.000,00',
        date: '27/09/2022',
        time: '12:14:35',
        type: 1
    },
    {
        id: 6,
        description: 'Adiantamento',
        card: 'Nubank',
        value: '5.100',
        date: '27/09/2022',
        time: '12:14:35',
        type: 1
    },
    {
        id: 7,
        description: 'Reserva',
        card: 'Inter',
        value: '500.00',
        date: '27/09/2022',
        time: '12:14:35',
        type: 1
    },
    {
        id: 8,
        description: 'Boleto conta de água',
        card: 'Inter',
        value: '58.26',
        date: '27/09/2022',
        time: '12:14:35',
        type: 0
    },
    {
        id: 9,
        description: 'Boleto conta de água',
        card: 'Inter',
        value: '58.26',
        date: '27/09/2022',
        time: '12:14:35',
        type: 0
    },
    {
        id: 10,
        description: 'Boleto conta de água',
        card: 'Caixa',
        value: '58.26',
        date: '27/09/2022',
        time: '12:14:35',
        type: 0
    },
    {
        id: 11,
        description: 'Boleto conta de água',
        card: 'Nubank',
        value: '58.26',
        date: '27/09/2022',
        time: '12:14:35',
        type: 0
    },
    {
        id: 12,
        description: 'Boleto conta de água',
        card: 'Nubank',
        value: '3.00',
        date: '27/09/2022',
        time: '12:14:35',
        type: 1
    },
    {
        id: 13,
        description: 'Boleto conta de água',
        card: 'Inter',
        value: '3.00',
        date: '27/09/2022',
        time: '12:14:35',
        type: 1
    },
    {
        id: 14,
        description: 'Boleto conta de água',
        card: 'Nubank',
        value: '3.00',
        date: '27/09/2022',
        time: '12:14:35',
        type: 1
    },
    {
        id: 15,
        description: 'Boleto conta de água',
        card: 'Inter',
        value: '3.00',
        date: '27/09/2022',
        time: '12:14:35',
        type: 1
    },
    {
        id: 16,
        description: 'Boleto conta de água',
        card: 'Inter',
        value: '3.00',
        date: '27/09/2022',
        time: '12:14:35',
        type: 1
    },
    {
        id: 17,
        description: 'Boleto conta de água',
        card: 'Inter',
        value: '3.00',
        date: '27/09/2022',
        time: '12:14:35',
        type: 1
    },
    {
        id: 18,
        description: 'Boleto conta de água',
        card: 'Inter',
        value: '3.00',
        date: '27/09/2022',
        time: '12:14:35',
        type: 1
    },    {
        id: 19,
        description: 'Boleto conta de água',
        card: 'Nubank',
        value: '3.00',
        date: '27/09/2022',
        time: '12:14:35',
        type: 1
    },    {
        id: 20,
        description: 'Boleto conta de água',
        card: 'Nubank',
        value: '3.00',
        date: '27/09/2022',
        time: '12:14:35',
        type: 1
    },    {
        id: 21,
        description: 'Boleto conta de água',
        card: 'Bradesco',
        value: '3.00',
        date: '27/09/2022',
        time: '12:14:35',
        type: 1
    },    {
        id: 22,
        description: 'Boleto conta de água',
        card: 'Nubank',
        value: '3.00',
        date: '27/09/2022',
        time: '12:14:35',
        type: 1
    },    {
        id: 23,
        description: 'Boleto conta de água',
        card: 'Bradesco',
        value: '3.00',
        date: '27/09/2022',
        time: '12:14:35',
        type: 1
    },    {
        id: 24,
        description: 'Boleto conta de água',
        card: 'Bradesco',
        value: '3.00',
        date: '27/09/2022',
        time: '12:14:35',
        type: 1
    },
];



export default  CarregarList = () => {
 
    let resultadoSoma = 0;
    let resultadoGastos = 0;

    listagem.forEach(item => {

        if(item.type === 1) {
            resultadoSoma += parseFloat(item.value);
        } else {
            resultadoGastos += parseFloat(item.value)
        }
        
    })



    return {listagem, resultadoSoma, resultadoGastos}

}