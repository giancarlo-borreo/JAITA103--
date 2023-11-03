public class WhileLoops {
    public static void main (String[] args){
        int i = 500;
        // while(i<4000){
        //     try {
        //         Thread.sleep(10);
        //     } catch (InterruptedException e) {
        //         System.err.println(e);
        //     }
            
        //     System.out.println(i);
        //     i+=500;
        // }
        // double randNum = Math.random();
        // while(randNum<0.5){
        //     randNum=Math.random();
        // }
        // System.out.println(randNum);
        double randN;
        do{
            randN = Math.random();
            System.out.println(randN);
        }while(randN<0.5);


    }
}
