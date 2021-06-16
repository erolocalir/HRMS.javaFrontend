import React from 'react';
import Filters from './Filters';
import { Grid, GridColumn, Container } from 'semantic-ui-react'
import JobAdvertisementList from '../pages/Job/JobAdvertisementList';
import JobPositionList from '../pages/Job/JobPositionList';
import { Route } from "react-router";
import EmployerVerificationDetail from '../pages/Job/EmployerVerificationDetail';
import CandidatesList from '../pages/User/CandidatesList';
import SignedUpforEmployer from './SignedUpforEmployer';
import SignedUpforCandidates from './SignedUpforCandidates';
import EmployerList from '../pages/User/EmployerList';
import CvList from '../pages/Job/CvList';
import CvDetail from '../pages/Job/CvDetail';
import AddCv from '../pages/Job/AddCv';
import AdvertisementDetail from '../pages/Job/AdvertisementDetail';
import AddJob from '../pages/Job/AddJob';





export default function Dashboard() {


    return (

        <div>

            <Container>
                <Grid>
                    <Grid.Row>

                        <GridColumn width={4}>
                            <Filters />
                        </GridColumn>

                        <GridColumn width={12}>
                            <Route exact path="/job" component={EmployerVerificationDetail} />
                            <Route exact path="/"    component={JobAdvertisementList} />
                            <Route exact path="/5" component={SignedUpforEmployer} />
                            <Route exact path="/6" component={SignedUpforCandidates} />
                            <Route exact path="/10" component={EmployerList} />
                            <Route exact path="/CV" component={CvList} />
                            <Route exact path="/CvDetail" component={CvDetail} />
                            <Route exact path="/AddCv" component={AddCv} />
                            <Route exact path="/AdvertisementDetail" component={AdvertisementDetail} />
                            <Route exact path="/AddJob" component={AddJob} />
                            
                            
                        </GridColumn>

                        
                        <GridColumn width={12}>
                        <JobPositionList />
                    </GridColumn>


                    <GridColumn width={12}>
                        <CandidatesList />
                    </GridColumn>

                    </Grid.Row>

                  

                </Grid>
            </Container>





        </div>
    )
}
