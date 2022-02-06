import { Consulta } from './../Consultas/entity';
import moment from 'moment';

export const getAvaliable = (
    consultas: Consulta[],
): { data: string; horarios: string[] }[] => {
    const occupeds = getOccupeds(consultas);

    const data = moment(new Date(), 'YYYY-MM-DD');

    occupeds.push({
        data: data.format('YYYY-MM-DD'),
        horarios: [
            '08:00',
            '09:00',
            '10:00',
            '11:00',
            '12:00',
            '13:00',
            '14:00',
            '15:00',
            '16:00',
            '17:00',
        ].filter(dh => dh < data.toISOString().substring(11, 5)),
    });

    const avaliable: { data: string; horarios: string[] }[] = [];

    for (let count = 0; count < 28; count += 1) {
        if (!['Sunday', 'Saturday'].includes(data.format('dddd'))) {
            const findedOccuped = occupeds.find(
                oc => oc.data === data.format('YYYY-MM-DD'),
            );
            if ((findedOccuped?.horarios.length || 0) < 10) {
                avaliable.push({
                    data: data.format('YYYY-MM-DD'),
                    horarios: [
                        '08:00',
                        '09:00',
                        '10:00',
                        '11:00',
                        '12:00',
                        '13:00',
                        '14:00',
                        '15:00',
                        '16:00',
                        '17:00',
                    ].filter(hr => !findedOccuped?.horarios.includes(hr)),
                });
            }
        }

        data.add(1, 'days');
    }

    return avaliable;
};

export const getOccupeds = (
    consultas: Consulta[],
): { data: string; horarios: string[] }[] => {
    const occupeds: { data: string; horarios: string[] }[] = [];

    consultas.forEach(consulta => {
        const iso = new Date(consulta.dateTime).toISOString();

        const data = iso.substring(0, 10);
        const horario = iso.substring(11, 5);

        const occuped = occupeds.find(oc => oc.data === data) || {
            data,
            horarios: [],
        };

        occuped.horarios.push(horario);

        occupeds.push(occuped);
    });

    return occupeds;
};
