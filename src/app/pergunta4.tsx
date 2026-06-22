import { router, useLocalSearchParams } from 'expo-router'; // Importado useLocalSearchParams
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Pergunta4() {
  // Captura os parâmetros enviados pela tela anterior (Pergunta 3)
  const params = useLocalSearchParams();
  // Converte o valor recebido para número (se for o primeiro, começa em 0)
  const pontosRecebidos = params.acertos ? Number(params.acertos) : 0;
  
  // ATENÇÃO ALUNOS: Lógica de Pontuação e Navegação!
  // A função abaixo recebe 'true' se o aluno apertou o botão certo, ou 'false' se errou.
  const responder = (acertou: boolean) => {
    
    // ======== DESAFIO PARA A TURMA! ========
    // Neste momento, o botão só leva para a próxima tela, mas não salva a pontuação!
    // Como vocês vão fazer para salvar os acertos e enviar para a próxima tela?
    // 
    // DICA MESTRE: Com o expo-router, você pode passar "params" (informações) na navegação!
    // Exemplo de como poderia ser a lógica:
    // let pontosAtuais = 0;
    // if (acertou) { pontosAtuais = 1; }
    // router.push({ pathname: '/pergunta5', params: { acertos: pontosAtuais } });
    // ========================================

    // Lógica funcional: calcula os novos pontos e envia para a Pergunta 5
    let pontosAtuais = pontosRecebidos;
    if (acertou) { 
      pontosAtuais = pontosRecebidos + 1; 
    }
    
    router.push({ 
      pathname: '/pergunta5' as any,
      params: { acertos: pontosAtuais } 
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.contador}>Pergunta 4 de 10</Text>
      
      {/* Imagem Ilustrativa da Pergunta */}
      <Image source={{ uri: 'https://flaticon.com' }} style={styles.imagem} />

      <Text style={styles.pergunta}>Qual é o principal foco da linguagem HTML em uma página web?</Text>
      
      {/* Botão A (Incorreta) - Passa false para a função */}
      <TouchableOpacity style={styles.botao} onPress={() => responder(false)}>
        <Text style={styles.textoBotao}>A) Fazer a estilização visual das cores e bordas.</Text>
      </TouchableOpacity>
      
      {/* Botão B (Correta) - Passa true para a função */}
      <TouchableOpacity style={styles.botao} onPress={() => responder(true)}>
        <Text style={styles.textoBotao}>B) Criar a estrutura e o conteúdo da página.</Text>
      </TouchableOpacity>

      {/* Botão C (Incorreta) - Passa false */}
      <TouchableOpacity style={styles.botao} onPress={() => responder(false)}>
        <Text style={styles.textoBotao}>C) Adicionar lógica de programação avançada.</Text>
      </TouchableOpacity>

      {/* Botão D (Incorreta) - Passa false */}
      <TouchableOpacity style={styles.botao} onPress={() => responder(false)}>
        <Text style={styles.textoBotao}>D) Criar bancos de dados complexos.</Text>
      </TouchableOpacity>

      {/* Para as próximas telas de perguntas, vocês vão seguir essa mesma estrutura! */}
    </View>
  );
}

// Estilização da Tela
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fdf2f8', padding: 20 },
  contador: { fontSize: 16, color: '#be185d', fontWeight: 'bold', marginBottom: 20 },
  imagem: { width: 120, height: 120, marginBottom: 20 }, // Estilo da imagem
  pergunta: { fontSize: 24, fontWeight: 'bold', marginBottom: 30, textAlign: 'center', color: '#1f2937' },
  botao: { 
    backgroundColor: '#ec4899', 
    padding: 18, 
    borderRadius: 12, 
    width: '100%', 
    marginBottom: 15, 
    alignItems: 'center',
  },
  textoBotao: { color: '#ffffff', fontSize: 16, fontWeight: 'bold', textAlign: 'center' },
});
