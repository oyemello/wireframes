import React, { useState } from 'react';
import {
  Header,
  HeaderName,
  HeaderGlobalBar,
  HeaderGlobalAction,
  Theme,
  Button,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Content,
  Search
} from '@carbon/react';
import { Upload, Settings, UserAvatar, Notification } from '@carbon/icons-react';
import Dashboard from './components/Dashboard';
import './index.css';

export default function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  const handleXlsxUpload = () => {
    setIsUploading(true);
    // Simulate XLSX upload logic
    setTimeout(() => {
      setIsUploading(false);
      alert('XLSX Data Successfully Integrated into Dashboard!');
    }, 1500);
  };

  return (
    <Theme theme="g100">
      <div className="app-container">
        <Header aria-label="Carbon Dashboard">
          <HeaderName href="#" prefix="IBM">
            [viaMCP] - Design-to-Code Dashboard
          </HeaderName>
          <HeaderGlobalBar>
            <div style={{ width: '400px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Search
                size="md"
                placeholder="Search across tables..."
                labelText="Search"
                closeButtonLabelText="Clear search input"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <HeaderGlobalAction 
              aria-label="Upload XLSX" 
              onClick={handleXlsxUpload} 
              disabled={isUploading}
            >
              <Upload size={20} />
            </HeaderGlobalAction>
            <HeaderGlobalAction aria-label="Notifications">
              <Notification size={20} />
            </HeaderGlobalAction>
            <HeaderGlobalAction aria-label="User Profile">
              <UserAvatar size={20} />
            </HeaderGlobalAction>
          </HeaderGlobalBar>
        </Header>

        <Content className="content-wrapper">
          <Tabs 
            selectedIndex={activeTab} 
            onChange={({ selectedIndex }) => setActiveTab(selectedIndex)}
            style={{ padding: '0 32px' }}
          >
            <TabList aria-label="Dashboard Tabs" contained>
              <Tab>Overview</Tab>
              <Tab>Analytics</Tab>
              <Tab>Security</Tab>
              <Tab>Resources</Tab>
              <Tab>Monitoring</Tab>
              <Tab>Settings</Tab>
            </TabList>
            <TabPanels style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              {[0, 1, 2, 3, 4, 5].map((idx) => (
                <TabPanel key={idx} style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <Dashboard activeTab={idx + 1} searchTerm={searchTerm} />
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        </Content>
      </div>
    </Theme>
  );
}
