//Store
/*
class Ui {

  @observable searchValue: string = '';
  @observable source: any[] = [];
  @observable field: string = '';
  @observable store: string = '';

  @action changeSearchValue = (text: string) => {this.searchValue = text; console.log(text); }
  @action cleanSearchValue = () => {this.searchValue = ''; }

}
*/

/*
import * as React from 'react'; // tslint:disable-line:no-unused-variable
import {Component} from 'react';
import {StyleSheet, View, ListView, Text, TouchableHighlight} from 'react-native';
//import {observer} from 'mobx-react/native';
import {computed} from 'mobx';
import {Actions} from 'react-native-mobx';

interface SearchListProps {
  source: string; store: any; onChange: (text: string, field: string) => void; storeName: string; field: string;
}

const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class SearchList extends Component<SearchListProps, {}> {

  constructor(props: SearchListProps) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }

  onPress = (rowData: string): void => {
    this.props.onChange({target: {name: this.props.field, value: rowData}});
    this.props.store.ui.cleanSearchValue();
    Actions.pop();
  }

  @computed get dataSource(): any {
    let text = this.props.store.ui.searchValue;
    const  source: string[]  = this.props.store[this.props.storeName][this.props.source];
    if (text.length >= 3 ) {
      const regex = new RegExp(`${text.trim()}`, 'i');
      let result = source.filter(h => h.search(regex) >= 0);
      return dataSource.cloneWithRows(result);
    } else {
      return dataSource.cloneWithRows(source);
    }
  }

  renderRow = (rowData: any = {}): any => {
    return (
      <TouchableHighlight onPress={() => this.onPress(rowData)} underlayColor="#c8c7cc">
        <View>
          <View style={defaultStyles.row}>
            <Text
              style={[{flex: 1}, defaultStyles.description]}
              numberOfLines={1}
            >
              {rowData}
            </Text>
          </View>
          <View style={defaultStyles.separator} />
        </View>
      </TouchableHighlight>
    );
  }

  render(): any {
    return (
      <View
        style={defaultStyles.container}
      >
          <ListView
            enableEmptySections={true}
            keyboardShouldPersistTaps={true}
            keyboardDismissMode="on-drag"
            style={defaultStyles.listView}
            dataSource={this.dataSource}
            renderRow={this.renderRow}
            automaticallyAdjustContentInsets={false}
            {...this.props}
          />
      </View>
    );
  }
};

const defaultStyles = StyleSheet.create<any>({
  container: {
    flex: 1,
  },
  listView: {
     flex: 1,
  },
  row: {
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft: 8,
    marginRight: 8,
    backgroundColor: '#FFFFFF',
    padding: 4,
    height: 36,
    flexDirection: 'row',
  },
  separator: {
    //height: 1,
    //backgroundColor: '#c8c7cc',
  },
  description: {
  },

});

export default SearchList;

*/

/*propTypes: {
    onPress: React.PropTypes.func,
    minLength: React.PropTypes.number,
    fetchDetails: React.PropTypes.bool,
    autoFocus: React.PropTypes.bool,
    getDefaultValue: React.PropTypes.func,
    styles: React.PropTypes.object,
    enableEmptySections: React.PropTypes.bool,
    source: React.PropTypes.string,
    store: React.PropTypes.object,
    field: React.PropTypes.string,
    storeName: React.PropTypes.string
  },

  getDefaultProps() {
    return {
      onPress: () => {},
      minLength: 0,
      fetchDetails: false,
      autoFocus: false,
      getDefaultValue: () => '',
     // timeout: 20000,
      //onTimeout: () => console.warn('google places autocomplete: request timeout'),
      styles: {
      },
    };
  },*/
