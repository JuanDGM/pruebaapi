import { FC } from 'react';
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface Props {
  tabs: tabPanel[];
}

interface tabPanel {
  title: string;
  component: React.ReactNode;
  index: number;
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const BasicTabs: FC<Props> = ({ tabs }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs 
          value={value} 
          onChange={handleChange} 
          scrollButtons
          allowScrollButtonsMobile
          aria-label="basic tabs example">
          {
            tabs.map((element: tabPanel) => (
              <Tab label={element.title} {...a11yProps(element.index)} key={element.index}/>
            ))
          }

        </Tabs>
      </Box>
      {
        tabs.map((element: tabPanel) => (
          <TabPanel value={value} index={element.index} key={element.index}>
            {element.component}
          </TabPanel>
        ))

      }
    </Box>
  );
}
