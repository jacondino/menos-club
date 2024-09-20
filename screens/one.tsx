import { useFont } from '@shopify/react-native-skia';
import { format } from 'date-fns';
import { View, Text } from 'react-native';
import { CartesianChart, Line } from 'victory-native';
import { DATA } from '../src/data';

export default function TabOneScreen() {
  const font = useFont(require('../src/fonts/Roboto-Regular.ttf'));

  const getUserPointHistory = (userId: string) => {
    return DATA.filter((item) => item.usuario === userId).map((item) => ({
      date: item.data,
      points: item.pontos,
    }));
  };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fcf1bd',
      }}>
      <Text
        style={{
          marginBottom: 50,
        }}>
        Gráfico de pontos por periodo referente ao usuario 1
      </Text>

      <Text
        style={{
          textAlign: 'left',
          width: '100%',
          marginLeft: 20,
          marginBottom: 10,
          fontWeight: 'bold',
        }}>
        PONTOS
      </Text>
      <View
        style={{
          width: '100%',
          height: 300,
          paddingHorizontal: 20,
        }}>
        <CartesianChart
          data={getUserPointHistory('user1')}
          xKey="date"
          yKeys={['points']}
          axisOptions={{
            tickCount: 5,
            font: font,
            labelOffset: { x: 0, y: 2 },
            labelPosition: 'outset',
            formatYLabel: (value) => `${value}`,
            formatXLabel: (value) => format(value, 'MM/yy'),
          }}>
          {({ points }) => <Line points={points.points} color="red" strokeWidth={3} />}
        </CartesianChart>
      </View>
      <Text
        style={{
          textAlign: 'left',
          width: '100%',
          marginLeft: 20,
          marginBottom: 10,
          fontWeight: 'bold',
        }}>
        DATA
      </Text>
    </View>
  );
}
