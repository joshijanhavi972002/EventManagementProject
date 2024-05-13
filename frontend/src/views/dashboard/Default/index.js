import { useEffect, useState } from 'react';

// material-ui
import { Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// project imports

import Event_Category from './Event_Category';
// import TotalIncomeDarkCard from './TotalIncomeDarkCard';
//import TotalIncomeLightCard from './TotalIncomeLightCard';
import { gridSpacing } from 'store/constant';

import Events from './Events';
import UserRegistration from './UserRegistration';
import CompleteEvent from './CompleteEvent';
import useFetch from '../../../hooks/useFetch';

import DashboardEventList from './DashboardEventList';
import DashboardEventList2 from '../DashboardEventList2';
import { checkTokenAndRedirect } from 'views/Cookies/cookies.js';
// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
  
  
  const theme = useTheme();
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
    checkTokenAndRedirect()
        
  }, []);

  const { result: clientResult, isLoading: clientLoading } = useFetch(() =>
    request.summary({ entity: 'client' })
  );

  return (
    <Grid container spacing={gridSpacing}>
       <Grid item xs={12}>
        <Typography variant="h4" component="h1" gutterBottom>
          Dashboard
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={3} md={6} sm={6} xs={12}>
            <Event_Category isLoading={isLoading }  categoryCount={10} />
          </Grid>
          <Grid item lg={3} md={6} sm={6} xs={12}>
            <Events isLoading={isLoading}  />
          </Grid>
          <Grid item sm={3} xs={12} md={6} lg={3}>
            <UserRegistration isLoading={isLoading}  />
          </Grid>

          <Grid item sm={6} xs={12} md={6} lg={3}>
            {/* <EarningCard isLoading={isLoading} /> */}
            <CompleteEvent isLoading={isLoading} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}  >
        <Grid container spacing={gridSpacing} style={{ objectFit: "contain" }}>
          <Grid item xs={12} md={12} lg={12} >
            {/* <TotalGrowthBarChart isLoading={isLoading} /> */}
            <DashboardEventList2/>
          
          </Grid>
          
        </Grid>
      </Grid>
      {/* <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} md={6} lg={6}>
            <RecentInvoices />
          </Grid>
          <Grid item xs={12} md={4} lg={6}>
            <RecentQuotes />
          </Grid>
        </Grid>
      </Grid> */}
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} md={6} lg={5}>
            {/* <AppTrafficBySite
              title="Traffic by Site"
              list={[
                {
                  name: 'FaceBook',
                  value: 323234,
                  icon: <Iconify icon={'eva:facebook-fill'} color="#1877F2" width={32} />
                },
                {
                  name: 'Google',
                  value: 341212,
                  icon: <Iconify icon={'eva:google-fill'} color="#DF3E30" width={32} />
                },
                {
                  name: 'Linkedin',
                  value: 411213,
                  icon: <Iconify icon={'eva:linkedin-fill'} color="#006097" width={32} />
                },
                {
                  name: 'Twitter',
                  value: 443232,
                  icon: <Iconify icon={'eva:twitter-fill'} color="#1C9CEA" width={32} />
                }
              ]}
            /> */}
          </Grid>
          <Grid item xs={12} md={7}>
            {/* <AppTasks
              title="Tasks"
              list={[
                { id: '1', label: 'Create FireStone Logo' },
                { id: '2', label: 'Add SCSS and JS files if required' },
                { id: '3', label: 'Stakeholder Meeting' },
                { id: '4', label: 'Scoping & Estimations' },
                { id: '5', label: 'Sprint Showcase' }
              ]}
            /> */}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
