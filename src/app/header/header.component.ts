import { Component, ElementRef, ViewChild, viewChild } from "@angular/core";
import { SubheaderComponent } from "../subheader/subheader.component";
import { delay, filter, from, fromEvent, interval, map, Observable, of, pluck, retry, retryWhen, scan, Subscription, take, takeLast, takeUntil, tap, throwError, timer, toArray } from "rxjs";
import { subscriptionLogsToBeFn } from "rxjs/internal/testing/TestScheduler";
import { mapToCanDeactivate } from "@angular/router";
@Component({
    selector:'app-header',
    //  template:'<h1>Tu taru kam kar</h1>',
    templateUrl:'header.component.html',
    styleUrl:'header.component.css',
    imports:[SubheaderComponent],
    standalone:true,
})
export class Headercomponent{
    intervalDemo = interval(1000);
    timerDemo = timer(5000,1000);
    intervalSubcription :Subscription;
    intervalDemoMapSubscription :Subscription;
    timerSubscription :Subscription;
    tapSubscription:Subscription;
    intervalDemoValue;
    timerDemoValue;
    formValue;
    ofValue;
    @ViewChild('demoof') demoofElment;
    ngOnInit(){
        //timer
        this.timerSubscription = this.timerDemo.subscribe((res)=>{
            this.timerDemoValue = "timer " + ++res
            if(res >= 5){
                this.timerSubscription.unsubscribe()
            }

        })
        //interval
        this.intervalSubcription = this.intervalDemo.subscribe((res)=>{
            this.intervalDemoValue ="count " + ++res

            if(res >= 4){
                this.intervalSubcription.unsubscribe()
            } 
        });

        //of
        var ofDemo = of("john","dow","jay");
        // var ofDemo = of({ a : "john", b: "dow", c : "jay"});


        ofDemo.subscribe((res)=>{
            // const brElement=document.createElement('br')
            const liElement=document.createElement('li')
            liElement.append(res);
            document.getElementById("demoof").appendChild(liElement)
            // document.getElementById("demoof").appendChild(brElement)
        })

        //from 
        var fromDemo = from(["first","second","third"])
        // var fromDemo = from("hello i am a devloper")
        fromDemo.subscribe((res)=>{
            const liElement=document.createElement('li')
            liElement.append(res);
            document.getElementById('fromdemo').appendChild(liElement)
        })

        //toArray
        const toArrayDemo = of("john","dow");
        toArrayDemo.pipe(take(1) ,toArray()).subscribe((res)=>{
            console.log(res);
        })

        //custom observable

        const observableDemo = Observable.create(observer => {
           setTimeout(() => {
            observer.next("first")
           }, 1000);  
           setTimeout(() => {
            observer.next("first")
           }, 2000);
           setTimeout(() => {
            observer.next("first")
           }, 3000);
           setTimeout(() => {
            observer.next("first")
           }, 4000);
           setTimeout(() => {
            observer.error(new Error("reach max limit"));
           }, 5000);

        })
        observableDemo.subscribe((res)=>{
            console.log(res)
        })

        //map
    //     const intervalDemoMap= interval(1000);
    //     this.intervalDemoMapSubscription = intervalDemoMap.pipe(map(data => "video" + data)).subscribe((res)=>{
    //         console.log(res);
    //     })
    //    setTimeout(() => {
    //     this.intervalDemoMapSubscription.unsubscribe()
    //    }, 10000);

       //map2
        
       const mapdata  = from([
        {name:"john",surname:'dow',job:{title:"sde"}},
        {name:"emu",surname:'don',job:{title:"sde2"}}
        ]);

        const map2 = interval(2000);
        mapdata.pipe( map(data => data.name)).subscribe((res)=>{
            setTimeout(() => {
                console.log(res)
            }, 5000);
        })

        //pluck
        mapdata.pipe(pluck('surname'), toArray()).subscribe((res)=>{
            setTimeout(() => {
                console.log(res)
            }, 5000);
        })

        //nested pluck
        mapdata.pipe(pluck('job','title'), toArray()).subscribe((res)=>{
            setTimeout(() => {
                console.log(res)
            }, 5000);
        })

        
        //filter operators
        const filterdata  = from([
          {id:1 , name :"john"},
          {id:2 , name :"jain"},
          {id:3 , name :"akay"},
          {id:4 , name :"akshay"},
          {id:5 , name :"ravan"},
          {id:6 , name :"jay"},
          {id:7 , name :"jack"},
          {id:8 , name :"sinha"},
          {id:9 , name :"vicky"},
          {id:10 , name :"virat"},
          {id:11, name :"kayal"},
        ]);

        // filterdata.pipe(filter(data => data.id <= 8 && data.name.includes("j")),toArray()).subscribe((res)=>{
        //     setTimeout(() => {
        //         console.log(res);
        //     }, 5000);
        // })

        //tap operator

        // this.tapSubscription = filterdata.pipe(tap(data=>{if(data.id > 5){
        //     // setTimeout(() => {
        //     //     console.log("before"+ data)
        //     // }, 5000);
        //     this.tapSubscription.unsubscribe()
        // }}) ,  map(data => data.id),tap(data => setTimeout(() => {
        //     // console.log("after" + data)
        // }, 5000)) ).subscribe((res)=>{
        //     setTimeout(() => {
        //         console.log(res);
        //     }, 5000);
        // })

        ///take
        //    filterdata.pipe(take(1),toArray()).subscribe((res)=>{
        //     setTimeout(() => {
        //         console.log(res);
        //     }, 5000);
        // })

        //take last
        // filterdata.pipe(takeLast(1)).subscribe((res)=>{
        //     setTimeout(() => {
        //         console.log(res);
        //     }, 5000);
        // })

        let condition1 = fromEvent(document,'click')
        let takeUntileInterval = timer(5000,1000);
        //takeUntile
        // takeUntileInterval.pipe(takeUntil(condition1)).subscribe((res)=>{
        //     console.log(res)
        // })

        //retry data
        takeUntileInterval.pipe(retryWhen((err) => err.pipe(delay(1000) , scan(retryCount => {
            if(retryCount >= 10){
                throw err
            }
            else{
                retryCount++;
                console.log(retryCount)
            }
        },0) ) )).subscribe((res)=>{
            console.log(res)
        })

    }
    ngOnDestroy(){
        this.timerSubscription.unsubscribe()
        this.intervalDemoMapSubscription.unsubscribe()
    }

}