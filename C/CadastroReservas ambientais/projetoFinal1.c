#include <stdio.h>
#include <string.h>
#include <stdbool.h>
#include <stdlib.h>
#include <ctype.h>


// reserva florestal
struct reservaFlorestal{
    char nome_reserva[20];
    char tipo_vegetacao[20];
    int area_total;
    bool ha_nativos;
    char animais_risco_exticao[50];
} Reserva;


// no da arvore
struct Node {
  int endereco;
  char nome[20]; 
  struct Node *esq;
  struct Node *dir;
  int bal;
};

typedef struct reservaFlorestal ReservaFlorestal;
typedef struct Node AVL;


FILE *Arquivo;
ReservaFlorestal Reserva;
struct Node *raiz;
int indice = 0;
int Tamanho = 20 * sizeof(char) + 20 * sizeof(char) + sizeof(bool) + 50 * sizeof(char);


int tamanhoArquivo(FILE *Arquivo){
    fseek(Arquivo,0,0);
    int ind = 0;
    do
    { fread(&Reserva,Tamanho,1,Arquivo);
      if(!(feof(Arquivo))){
        ind ++;
    }
    } while (!(feof(Arquivo)));
    return ind;

}


// calcula o balanco
int bal(struct Node *N) {
  if (N == NULL)
    return 0;
  return N->bal;
}

int max(int a, int b) {
  return (a > b) ? a : b;
}

// cria um no a ser adicionado na arvore
struct Node *novoNode(int endereco,char nome[20]) {
  
  struct Node *node = NULL;
  node = (struct Node *)malloc(sizeof(struct Node));
  strcpy(node->nome,nome);
  node->endereco = endereco;
  node->esq = NULL;
  node->dir = NULL;
  node->bal = 1;
  return (node);

}

// rotacao aa direita
struct Node *rotacaoDir(struct Node *y) {
  struct Node *x = y->esq;
  struct Node *T2 = x->dir;

  x->dir = y;
  y->esq = T2;

  y->bal = max(bal(y->esq), bal(y->dir)) + 1;
  x->bal = max(bal(x->esq), bal(x->dir)) + 1;

  return x;
}

// rotacao a esquerda
struct Node *rotacaoEsq(struct Node *x) {
  struct Node *y = x->dir;
  struct Node *T2 = y->esq;

  y->esq = x;
  x->dir = T2;

  x->bal = max(bal(x->esq), bal(x->dir)) + 1;
  y->bal = max(bal(y->esq), bal(y->dir)) + 1;

  return y;
}

// retorna o fator de balanco de um no
int pegaBalanco(struct Node *N) {
  if (N == NULL)
    return 0;
  return bal(N->esq) - bal(N->dir);
}

// insere um no
struct Node *inserir(struct Node *node,char nome[20]) {
  if (node == NULL)
    return (novoNode(indice,nome));

  if (strcmp(nome,node->nome) < 0)
    node->esq = inserir(node->esq,nome);
  else if (strcmp(nome,node->nome) > 0)
    node->dir = inserir(node->dir,nome);
  else
    return node;

  
  node->bal = 1 + max(bal(node->esq),bal(node->dir));

  int balanco = pegaBalanco(node);
  if (balanco > 1 && strcmp(nome,node->esq->nome)<0) {
    return rotacaoDir(node);
  }

  if (balanco < -1 && strcmp(nome,node->dir->nome)>0) {
    return rotacaoEsq(node);
  }

  if (balanco > 1 && strcmp(nome,node->esq->nome)<0) {
    node->esq = rotacaoEsq(node->esq);
    return rotacaoDir(node);
  }

  if (balanco < -1 && strcmp(nome,node->dir->nome)>0) {
    node->dir = rotacaoDir(node->dir);
    return rotacaoEsq(node);
  }

  return node;
}
// verificar se o no e nulo
struct Node *ehNulo(struct Node *node) {
  struct Node *indo = node;

  while (indo->esq != NULL)
    indo = indo->esq;

  return indo;
}

char nv[20] = "excluido";
// printa a arvore
void printArvore(struct Node *raiz) {
  if (raiz != NULL) {
    if (raiz->endereco != (-1))
    {
      printf("endereco: %d\n",raiz->endereco);
      printf("Reserva: %s \n", raiz->nome);
    }
    
    printf("--------------------------------------\n");
    printArvore(raiz->esq);
    printArvore(raiz->dir);
  }
}

//inseri reserva 
ReservaFlorestal inserirReserva(){
    printf("\nNome da reserva: ");
    fflush(stdin);
    gets(Reserva.nome_reserva);
    printf("\nTipo de vergetacao: ");
    fflush(stdin);
    gets(Reserva.tipo_vegetacao);
    printf("\nArea total em Km2: ");
    fflush(stdin);
    scanf("%d", &Reserva.area_total);
    printf("\nTem nativos: S ou N ");
    char dec;
    scanf(" %c", &dec);
    dec = toupper(dec);
    if(dec=='S') {
        Reserva.ha_nativos=true;
    }
    else{ 
        Reserva.ha_nativos=false;
    }
    printf("\nAnimais em extincao: ");
    fflush(stdin);
    gets(Reserva.animais_risco_exticao);
    
    return Reserva;
}

//insere reserva na arvore e no arquivo
inserirDuplo(struct Node *raiz){
    Arquivo = fopen("Reservas.dat","r+b");
    fread(&Reserva,Tamanho,1,Arquivo);
    Reserva = inserirReserva();
    raiz = inserir(raiz,&Reserva.nome_reserva);
    fseek(Arquivo,0,2);
    fwrite(&Reserva, Tamanho,1,Arquivo);
    fclose(Arquivo);
    indice ++;
    system("cls");
}
// procura a reserva
int procuraReserva(struct Node *raiz ,char nome[20]){
    if(raiz){
        if(strcmp(nome,raiz->nome) == 0){
            int val = raiz->endereco;
            raiz->endereco = -1;
            return val;
        }
        else if(strcmp(nome,raiz->nome) < 0){
            procuraReserva(raiz->esq,nome);
        }
        else {
            procuraReserva(raiz->dir,nome);
        }
    }
    return -1;
}

// reseva(remove) 
void reserva(struct Node *raiz){
    char nomeReserva[20];
    printf("Qual deseja reserva? ");
    system("cls");
    fflush(stdin);
    gets(nomeReserva);
    int endereco = procuraReserva(raiz, nomeReserva);
    Arquivo=fopen("Reservas.dat","r+b");
    system("cls");
    if(endereco != (-1)){
      fseek(Arquivo,endereco,0);
      fread(&Reserva,Tamanho,1,Arquivo);
      printf("Ok reserva processada com sucesso\n");
      char nat[10];
      if(&Reserva.ha_nativos){
          strcpy(&nat,"ha nativos");

      }
      else{
        printf("else");
        strcpy(&nat,"sem nativos");
      }
      printf("Nome: %s\nTipo de vegatacao: %s\nArea total: %d-km2\n%s\n", Reserva.nome_reserva, Reserva.tipo_vegetacao,Reserva.area_total,nat);
      strcpy(&Reserva.nome_reserva,"excluido");
      fseek(Arquivo,endereco,0);
      fwrite(&Reserva,Tamanho,1,Arquivo);
    }
    else{
      printf("Erro, verifique se voce digitou certo, ou se a reseva existe\n");
    }
    fclose(Arquivo);
}

int main(){
    Arquivo = fopen("Reservas.dat","a+b");
    fseek(Arquivo,0,0);
    int tamanho = 0;
    tamanho = tamanhoArquivo(Arquivo);
    printf("tamanho: %d indice %d\n",tamanho,indice);
    int decidd = 0;
    fseek(Arquivo,0,0);
    system("cls");
    while(indice < tamanho){
        fread(&Reserva,Tamanho,1,Arquivo);
        if(strcmp("excluido",Reserva.nome_reserva) != 0){
          
          raiz = inserir(raiz,Reserva.nome_reserva);
        }
        indice ++;
    }

    fclose(Arquivo);
    
    char pare;
    do{ system("cls");
        printf("-------------------------------------------------\n");
        printf("--- Bem vindo a reserva florestao de cansasas ---\n");
        printf("-------------------------------------------------\n\n");
        printf("Qual operacao deseja efetuar?\n");
        printf("1: inserir\n2: consulta total\n3: reservar\n");
        int decid;
        scanf("%d",&decid);
        switch (decid)
        {   system("cls");
            case 1 : inserirDuplo(raiz); break;
            case 2 : printArvore(raiz); break;
            case 3 : reserva(raiz); break;
            default:
                break;
        }
        printf("\nDeseja finalizar o processo? S - N\n");
        scanf(" %c",&pare);
        pare = toupper(pare);
    }while(pare != 'S');
    printf("saiu");
    return 0;
}