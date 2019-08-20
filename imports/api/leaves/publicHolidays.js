import { Mongo } from 'meteor/mongo';

export const PublicHolidays = new Mongo.Collection('publicHolidays');

PublicHolidays.schema = new SimpleSchema({
    name: {type: String},
    date: {type: Date}
});

//TODO: Make this automatic by making an API call to https://date.nager.at/Api

const names = [
    //2019
    {
        name: 'Ano Novo',
        date: new Date("2019-01-01T00:00:00Z")
    },
    {
        name: 'Carnaval',
        date: new Date("2019-03-05T00:00:00Z")
    },
    {
        name: 'Seixta-Feira Santa',
        date: new Date("2019-04-19T00:00:00Z")
    },
    {
        name: 'Páscoa',
        date: new Date("2019-04-21T00:00:00Z")
    },
    {
        name: 'Dia da Liberdade',
        date: new Date("2019-04-25T00:00:00Z")
    },
    {
        name: 'Dia do Trabalhador',
        date: new Date("2019-05-01T00:00:00Z")
    },
    {
        name: 'Dia de Portugal',
        date: new Date("2019-06-10T00:00:00Z")
    },
    {
        name: 'Corpo de Deus',
        date: new Date("2019-06-20T00:00:00Z")
    },
    {
        name: 'Assunção de Nossa Senhora',
        date: new Date("2019-08-15T00:00:00Z")
    },
    {
        name: 'Implantação da República',
        date: new Date("2019-10-05T00:00:00Z")
    },
    {
        name: 'Todos os Santos',
        date: new Date("2019-11-01T00:00:00Z")
    },
    {
        name: 'Restauração da Independência',
        date: new Date("2019-12-01T00:00:00Z")
    },
    {
        name: 'Imaculada Conceição',
        date: new Date("2019-12-08T00:00:00Z")
    },
    {
        name: 'Natal',
        date: new Date("2019-12-25T00:00:00Z")
    },
    //2020
    {
        name: 'Ano Novo',
        date: new Date("2020-01-01T00:00:00Z")
    },
    {
        name: 'Carnaval',
        date: new Date("2020-02-25T00:00:00Z")
    },
    {
        name: 'Seixta-Feira Santa',
        date: new Date("2020-04-10T00:00:00Z")
    },
    {
        name: 'Páscoa',
        date: new Date("2020-04-12T00:00:00Z")
    },
    {
        name: 'Dia da Liberdade',
        date: new Date("2020-04-25T00:00:00Z")
    },
    {
        name: 'Dia do Trabalhador',
        date: new Date("2020-05-01T00:00:00Z")
    },
    {
        name: 'Dia de Portugal',
        date: new Date("2020-06-10T00:00:00Z")
    },
    {
        name: 'Corpo de Deus',
        date: new Date("2020-06-11T00:00:00Z")
    },
    {
        name: 'Assunção de Nossa Senhora',
        date: new Date("2020-08-15T00:00:00Z")
    },
    {
        name: 'Implantação da República',
        date: new Date("2020-10-05T00:00:00Z")
    },
    {
        name: 'Todos os Santos',
        date: new Date("2020-11-01T00:00:00Z")
    },
    {
        name: 'Restauração da Independência',
        date: new Date("2020-12-01T00:00:00Z")
    },
    {
        name: 'Imaculada Conceição',
        date: new Date("2020-12-08T00:00:00Z")
    },
    {
        name: 'Natal',
        date: new Date("2020-12-25T00:00:00Z")
    },
    ];

let doc;
for (doc of names) {
    PublicHolidays.update(doc, doc, {upsert:true});
}
