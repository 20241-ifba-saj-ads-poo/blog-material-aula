package posts.code.exercicioListas.militar;

public class MontarPelotao {
    public static void main(String[] args) {
        Soldado s1 = new Soldado("Leandro", 1);
        Soldado s2 = new Soldado("Leandro2", 12);
        Soldado s3 = new Soldado("Leandro3", 13);
        Cabo c1 = new Cabo("Caboclo", 10);
        c1.addSubordinado(s1);
        // s1.setImediato(c1);
        s2.setImediato(c1);
        s3.setImediato(c1);
        c1.addSubordinado(s3);

        //c1.getSubordinados().add(s3);
        //c1.getSubordinados().clear();
        //c1.getSubordinados().remove(s3);

        System.out.println("Imediato do Soldado " + s1.getNome() + " é :" + s1.getImediato().getNome());
        System.out
                .println("A quantidade de subordidados do Cabo " + c1.getNome() + " é :" + c1.getSubordinados().size());
    }
}
