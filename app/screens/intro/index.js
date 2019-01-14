import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { Component } from "react";
import { IndicatorViewPager, PagerDotIndicator } from "rn-viewpager";
import styles from "./styles";
import { doneIntro } from "../../actions/todoAction";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

export class Intro extends Component {
  constructor() {
    super();
  }

  done = () => {
    this.props.doneIntro();
    this.props.navigation.goBack();
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <IndicatorViewPager
          style={styles.container}
          indicator={this.renderDotIndicator()}
        >
          <View style={styles.view1}>
            <Image
              style={styles.image}
              source={require("../../images/todoIntro/i1.png")}
            />
          </View>
          <View style={styles.view2}>
            <Image
              style={styles.image}
              source={require("../../images/todoIntro/i2.png")}
            />
          </View>
          <View style={styles.view3}>
            <Image
              style={styles.image}
              source={require("../../images/todoIntro/i3.png")}
            />
            <TouchableOpacity style={styles.doneButton} onPress={this.done}>
              <Text style={styles.textDone}>GOT IT</Text>
            </TouchableOpacity>
          </View>
        </IndicatorViewPager>
      </View>
    );
  }

  renderDotIndicator() {
    return <PagerDotIndicator pageCount={3} />;
  }
}

const mapStateToProps = state => {
  const { updatedAt, isIntro } = state.updateReducer;
  return { updatedAt, isIntro };
};
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      doneIntro
    },
    dispatch
  );
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Intro);
