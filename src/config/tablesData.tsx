import { TableCellProps } from '../interfaces/Props';
import { plans, titleTable } from '../local/en/Table/constants';

export const headers: TableCellProps[] = [
    {
        icon: 'fak fa-pen-solid',
        tdTitle: titleTable.titleName,
    },
    {
        icon: 'fak fa-thumbs-up-solid',
        tdTitle: titleTable.titleRegion,
    },
    {
        icon: 'fak fa-arrow-up-right-from-square-solid',
        tdTitle: titleTable.titleTerm,
    },
    {
        icon: 'fak fa-circle-check-solid',
        tdTitle: titleTable.titleRate,
    },
];

export const rows = [
    {
        planName: plans.planName.liveBighter12,
        region: plans.region.nicor,
        term: `12 ${plans.term}`,
        rate: `10.89 ${plans.rate}`,
    },
    {
        planName: plans.planName.liveBighter18,
        region: plans.region.pecoElectricity,
        term: `10 ${plans.term}`,
        rate: `10.89 ${plans.rate}`,
    },
    {
        planName: plans.planName.FreePowerWeekends12,
        region: plans.region.nicor,
        term: `16 ${plans.term}`,
        rate: `10.89 ${plans.rate}`,
    },
    {
        planName: plans.planName.LiveBrighteOnUs31,
        region: plans.region.pecoElectricity,
        term: `18 ${plans.term}`,
        rate: `10.89 ${plans.rate}`,
    },
    {
        planName: plans.planName.liveBighter12,
        region: plans.region.nicor,
        term: `36 ${plans.term}`,
        rate: `10.89 ${plans.rate}`,
    },
    {
        planName: plans.planName.FreePowerWeekends12,
        region: plans.region.pecoElectricity,
        term: `10 ${plans.term}`,
        rate: `10.89 ${plans.rate}`,
    },
    {
        planName: plans.planName.FreePowerWeekends12,
        region: plans.region.nicor,
        term: `12 ${plans.term}`,
        rate: `10.89 ${plans.rate}`,
    },
    {
        planName: plans.planName.liveBighter18,
        region: plans.region.pecoElectricity,
        term: `18 ${plans.term}`,
        rate: `10.89 ${plans.rate}`,
    },
];
