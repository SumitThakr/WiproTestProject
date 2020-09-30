import React from 'react';
import { useEffect } from 'react';
import { useReducer } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect, useSelector } from 'react-redux';
//import your reusable carousel component.
import { HomeCarousel } from '../components/HomeCarousel';
//import color constants
import { Colors } from '../constants';
import { initialState, Reducer, getData } from '../redux';
import { Loading } from '../components/Loading';


//interface props for home component
export interface IProps {
  getData: any,
  data: []
  loading: boolean
}
//interface state for home component
export interface IState {  
}

class Home extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {      
    };
  }

  componentDidMount() {
    this.props.getData();
  }
  
  render() {
    console.log('home data:', this.props.data.length)
    console.log('home loading:', this.props.loading)
    return (
      <View style={styles.container}>
        <HomeCarousel
          data={this.props.data}
        />
        {this.props.loading ?
          <Loading />
          : null}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white
  }
})
//Map the redux state to your props.
const mapStateToProps = state => ({
  data: state.data,
  loading: state.loading,
})

//Map your action creators to your props.
const mapDispatchToProps = {
  getData,
}

//export your list as a default export 
export default connect(mapStateToProps, mapDispatchToProps)(Home);
