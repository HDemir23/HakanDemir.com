import { View } from 'react-native'


export default function Spacer({flex = 1 }: {flex?: number}) {
  return (
    <View style={{flex}}></View>
  )
}
