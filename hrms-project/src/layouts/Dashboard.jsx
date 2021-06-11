import React from 'react';
import Filters from './Filters';
import { Grid, GridColumn } from 'semantic-ui-react'
import JobAdvertisementList from '../pages/Job/JobAdvertisementList';



export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <GridColumn width={4}>
                        <Filters />
                    </GridColumn>
                    <GridColumn width={12}>
                        <JobAdvertisementList/>
                    </GridColumn>
                </Grid.Row>
            </Grid>

        </div>
    )
}
