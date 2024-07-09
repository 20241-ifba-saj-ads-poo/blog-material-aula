public class App {
    public static void main(String[] args) throws Exception {
        Data data1 = new Data();
        data1.dia = 1;
        data1.mes = 1;
        data1.ano = 2024;
        Data data2 = new Data();
        data2.dia = 2;
        data2.mes = 1;
        data2.ano = 2024;
        
        System.out.println("Data 1: "+data1+" | Data 2: "+data2);
        System.out.println("data1.anterior(data2)"+data1.anterior(data2));
        System.out.println("data1.posterior(data2)"+data1.posterior(data2));
        System.out.println("data1.igual(data2)"+data1.igual(data2));
        data1.incrementarDia();
        System.out.println("Data 1 :"+data1+"| Data 2 "+data2);
        System.out.println("data1.anterior(data2)"+data1.anterior(data2));
        System.out.println("data1.posterior(data2)"+data1.posterior(data2));
        System.out.println("data1.igual(data2)"+data1.igual(data2));
        data1.incrementarDia();
        System.out.println("Data 1 :"+data1+"| Data 2 "+data2);
        System.out.println("data1.anterior(data2)"+data1.anterior(data2));
        System.out.println("data1.posterior(data2)"+data1.posterior(data2));
        System.out.println("data1.igual(data2)"+data1.igual(data2));
    }
}
