import { useFont } from '@shopify/react-native-skia';
import { View, Text } from 'react-native';
import { CartesianChart, Bar } from 'victory-native';
import { DATA } from '../src/data';

export default function TabThreeScreen() {
  const font = useFont(require('../src/fonts/Roboto-Regular.ttf'));

  const categorizeUsersByPoints = () => {
    const pontosPorUsuario: any = {};

    // Agrupar pontos por usuário
    DATA.forEach((compra) => {
      const { usuario, pontos } = compra;
      if (!pontosPorUsuario[usuario]) {
        pontosPorUsuario[usuario] = 0;
      }
      pontosPorUsuario[usuario] += pontos;
    });

    const categorias = {
      'Até 10K': 0,
      'Até 20K': 0,
      'Até 30K': 0,
      'Até 40K': 0,
      'Acima de 40K': 0,
    };

    Object.values(pontosPorUsuario).forEach((totalPontos) => {
      if (totalPontos <= 10000) {
        categorias['Até 10K']++;
      } else if (totalPontos <= 20000) {
        categorias['Até 20K']++;
      } else if (totalPontos <= 30000) {
        categorias['Até 30K']++;
      } else if (totalPontos <= 40000) {
        categorias['Até 40K']++;
      } else {
        categorias['Acima de 40K']++;
      }
    });

    // Preparar dados para o gráfico
    return Object.keys(categorias).map((key) => ({
      categoria: key,
      quantidade: categorias[key],
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
        Gráfico de faixa de usuario por pontos
      </Text>
      <Text
        style={{
          textAlign: 'left',
          width: '100%',
          marginLeft: 20,
          marginBottom: 10,
          fontWeight: 'bold',
        }}>
        USUARIOS
      </Text>
      <View
        style={{
          width: '100%',
          height: 300,
          paddingHorizontal: 20,
        }}>
        <CartesianChart
          domainPadding={{ left: 50, right: 50 }}
          data={categorizeUsersByPoints()}
          xKey="categoria"
          yKeys={['quantidade']}
          axisOptions={{
            tickCount: 4,
            font: font,
            labelOffset: { x: 2, y: 2 },
            labelPosition: 'outset',
            formatYLabel: (value) => `${value}`,
          }}>
          {({ points, chartBounds }) => (
            <Bar
              points={points.quantidade}
              chartBounds={chartBounds}
              color="red"
              roundedCorners={{ topLeft: 10, topRight: 10 }}
              barWidth={50}
            />
          )}
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
        PONTOS
      </Text>
    </View>
  );
}
