import React, { Component } from "react";
import { TouchableOpacity, Modal, FlatList, View, Image } from "react-native";
import PropTypes from "prop-types";
import { Text, Button } from "../../component";
import { Colors, ImageView, Screen, Strings } from "../../config/appConstants";
import c from "../../styles/commonStyle";
class MultiSelect extends Component {

  state = {
    selected: this.props.selected
  }

  handleSelection = (item, index) => {
    let { selected } = this.state;
    if (selected.includes(item)) {
      let i = selected.indexOf(item)
      selected.splice(i, 1)
    }
    else {
      selected.push(item)
    }
    this.setState({ selected })
  }

  render() {
    const { data, onHide, onApply, visible } = this.props;
    const { selected } = this.state;
    return (
      <Modal
        visible={visible}
        animationType="fade"
        transparent={true}
        onRequestClose={onHide}
      >
        <View style={{ flex: 1, backgroundColor: Colors.alertbackgrouend, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{
            backgroundColor: Colors.white,
            width: Screen.width * 0.8,
            maxHeight: Screen.height * 0.8,
            borderRadius: 10,
            elevation: 1
          }}>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={onHide}
              style={{ padding: 10, alignSelf: 'flex-end' }}
            >
              <Image
                style={{ ...c.img10, tintColor: Colors.black }}
                source={ImageView.close}
              />
            </TouchableOpacity>
            <FlatList
              data={data}
              showsVerticalScrollIndicator={false}
              keyboardShouldPersistTaps={"always"}
              renderItem={({ item, index }) =>
                <TouchableOpacity
                  activeOpacity={1}
                  style={{ padding: 16, flexDirection: 'row', justifyContent: 'space-between' }}
                  onPress={() => this.handleSelection(item, index)}
                >
                  <Text lable={item.name} textStyle={{ color: selected.includes(item) ? Colors.green : Colors.black }} />
                  {
                    selected.includes(item) ?
                      <Image
                        style={{ ...c.img10, tintColor: Colors.green }}
                        source={ImageView.check}
                      /> : null
                  }
                </TouchableOpacity>
              }
              keyExtractor={item => item.id}
              ItemSeparatorComponent={() => <View style={c.separator} />}
            />
            <Button text={Strings.apply} containerStyle={{ margin: 10 }} onPress={() => onApply(selected)} />
          </View>
        </View>
      </Modal>
    );
  }
}

MultiSelect.propTypes = {
  visible: PropTypes.bool,
  data: PropTypes.array,
  onHide: PropTypes.func,
  onApply: PropTypes.func
};

export default MultiSelect;