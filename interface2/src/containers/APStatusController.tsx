import React, { Component } from 'react';

import {restController, RestControllerProps, RestFormLoader, SectionContent } from '../components';
import APStatusForm from '../forms/APStatusForm';
import { AP_STATUS_ENDPOINT } from '../constants/Endpoints';

export interface APStatus {
  active: boolean;
  ip_address: string;
  mac_address: string;
  station_num: number;
}

type APStatusControllerProps = RestControllerProps<APStatus>;

class APStatusController extends Component<APStatusControllerProps> {

  componentDidMount() {
    this.props.loadData();
  }

  render() {
    return (
      <SectionContent title="Access Point Status">
        <RestFormLoader
          {...this.props}
          render={formProps => <APStatusForm {...formProps} />}
        />
      </SectionContent>
    )
  }
}

export default restController(AP_STATUS_ENDPOINT, APStatusController);
