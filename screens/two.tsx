import { useFont } from '@shopify/react-native-skia';
import { View, Text } from 'react-native';
import { CartesianChart, Bar } from 'victory-native';
import { DATA } from '../src/data';

export default function TabTwoScreen() {
  const font = useFont(require('../src/fonts/Roboto-Regular.ttf'));

  const getPointsByProduct = (userId: string) => {
    const resultado: any = DATA.filter((compra) => compra.usuario === userId).reduce(
      (acc: any, compra) => {
        acc[compra.produto] = (acc[compra.produto] || 0) + compra.pontos;
        return acc;
      },
      {}
    );

    const pontosArray = Object.keys(resultado).map((produto) => ({
      produto,
      pontos: resultado[produto],
    }));

    return pontosArray
      .sort((a, b) => b.pontos - a.pontos)
      .slice(0, 3)
      .reverse();
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
        Gráfico de pontos por produto referente ao usuario 1
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
          domainPadding={{ left: 50, right: 50 }}
          data={getPointsByProduct('user1')}
          xKey="produto"
          yKeys={['pontos']}
          axisOptions={{
            tickCount: 3,
            font: font,
            labelOffset: { x: 2, y: 2 },
            labelPosition: 'outset',
            formatYLabel: (value) => `${value}`,
          }}>
          {({ points, chartBounds }) => (
            <Bar
              points={points.pontos}
              chartBounds={chartBounds}
              color="red"
              roundedCorners={{ topLeft: 10, topRight: 10 }}
              barWidth={50}
            />
          )}
        </CartesianChart>
      </View>
    </View>
  );
}
