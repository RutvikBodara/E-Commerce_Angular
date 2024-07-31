import { Component, ElementRef, ViewChild, viewChild, ViewChildren } from "@angular/core";
import { SubheaderComponent } from "../subheader/subheader.component";
import { combineLatest, concat, concatAll, concatMap, delay, filter, forkJoin, from, fromEvent, interval, map, merge, mergeAll, mergeMap, Observable, of, pluck, ReplaySubject, retry, retryWhen, scan, Subscription, switchMap, take, takeLast, takeUntil, tap, throwError, timer, toArray, withLatestFrom, zip } from "rxjs";
import { subscriptionLogsToBeFn } from "rxjs/internal/testing/TestScheduler";
import { mapToCanDeactivate } from "@angular/router";
import { CommonserviceService } from "../../commonservice.service";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ThisReceiver } from "@angular/compiler";
@Component({
    selector:'app-header',
    //  template:'<h1>Tu taru kam kar</h1>',
    templateUrl:'header.component.html',
    styleUrl:'header.component.css',
    imports:[SubheaderComponent,CommonModule,FormsModule],
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
    user1Subscribe:boolean;
    user2Subscribe:boolean;
    user1:Subscription;
    user2:Subscription;
    asyncValue :string;


    @ViewChild('demoof') demoofElment;
    @ViewChild('name') nameValue;
    @ViewChild('color') colorValue;
    constructor(private commonService :CommonserviceService){}
    ngOnInit(){
        //timer
    //     this.timerSubscription = this.timerDemo.subscribe((res)=>{
    //         this.timerDemoValue = "timer " + ++res
    //         if(res >= 5){
    //             this.timerSubscription.unsubscribe()
    //         }

    //     })
    //     //interval
    //     this.intervalSubcription = this.intervalDemo.subscribe((res)=>{
    //         this.intervalDemoValue ="count " + ++res

    //         if(res >= 4){
    //             this.intervalSubcription.unsubscribe()
    //         } 
    //     });

    //     //of
    //     var ofDemo = of("john","dow","jay");
    //     // var ofDemo = of({ a : "john", b: "dow", c : "jay"});


    //     ofDemo.subscribe((res)=>{
    //         // const brElement=document.createElement('br')
    //         const liElement=document.createElement('li')
    //         liElement.append(res);
    //         document.getElementById("demoof").appendChild(liElement)
    //         // document.getElementById("demoof").appendChild(brElement)
    //     })

    //     //from 
    //     var fromDemo = from(["first","second","third"])
    //     // var fromDemo = from("hello i am a devloper")
    //     fromDemo.subscribe((res)=>{
    //         const liElement=document.createElement('li')
    //         liElement.append(res);
    //         document.getElementById('fromdemo').appendChild(liElement)
    //     })

    //     //toArray
    //     const toArrayDemo = of("john","dow");
    //     toArrayDemo.pipe(take(1) ,toArray()).subscribe((res)=>{
    //         console.log(res);
    //     })

    //     //custom observable

    //     const observableDemo = Observable.create(observer => {
    //        setTimeout(() => {
    //         observer.next("first")
    //        }, 1000);  
    //        setTimeout(() => {
    //         observer.next("first")
    //        }, 2000);
    //        setTimeout(() => {
    //         observer.next("first")
    //        }, 3000);
    //        setTimeout(() => {
    //         observer.next("first")
    //        }, 4000);
    //        setTimeout(() => {
    //         observer.error(new Error("reach max limit"));
    //        }, 5000);

    //     })
    //     observableDemo.subscribe((res)=>{
    //         console.log(res)
    //     })

    //     //map
    // //     const intervalDemoMap= interval(1000);
    // //     this.intervalDemoMapSubscription = intervalDemoMap.pipe(map(data => "video" + data)).subscribe((res)=>{
    // //         console.log(res);
    // //     })
    // //    setTimeout(() => {
    // //     this.intervalDemoMapSubscription.unsubscribe()
    // //    }, 10000);

    //    //map2
        
    //    const mapdata  = from([
    //     {name:"john",surname:'dow',job:{title:"sde"}},
    //     {name:"emu",surname:'don',job:{title:"sde2"}}
    //     ]);

    //     const map2 = interval(2000);
    //     mapdata.pipe( map(data => data.name)).subscribe((res)=>{
    //         setTimeout(() => {
    //             console.log(res)
    //         }, 5000);
    //     })

    //     //pluck
    //     mapdata.pipe(pluck('surname'), toArray()).subscribe((res)=>{
    //         setTimeout(() => {
    //             console.log(res)
    //         }, 5000);
    //     })

    //     //nested pluck
    //     mapdata.pipe(pluck('job','title'), toArray()).subscribe((res)=>{
    //         setTimeout(() => {
    //             console.log(res)
    //         }, 5000);
    //     })

        
        //filter operators
        // const filterdata  = from([
        //   {id:1 , name :"john"},
        //   {id:2 , name :"jain"},
        //   {id:3 , name :"akay"},
        //   {id:4 , name :"akshay"},
        //   {id:5 , name :"ravan"},
        //   {id:6 , name :"jay"},
        //   {id:7 , name :"jack"},
        //   {id:8 , name :"sinha"},
        //   {id:9 , name :"vicky"},
        //   {id:10 , name :"virat"},
        //   {id:11, name :"kayal"},
        // ]);

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

        // let condition1 = fromEvent(document,'click')
        // let takeUntileInterval = timer(5000,1000);
        //takeUntile
        // takeUntileInterval.pipe(takeUntil(condition1)).subscribe((res)=>{
        //     console.log(res)
        // })

        //retry data
        // takeUntileInterval.pipe(retryWhen((err) => err.pipe(delay(1000) , scan(retryCount => {
        //     if(retryCount >= 10){
        //         throw err
        //     }
        //     else{
        //         retryCount++;
        //         console.log(retryCount)
        //     }
        // },0) ) )).subscribe((res)=>{
        //     console.log(res)
        // })

        //replay subject        
        // this.user1 = this.commonService.replaySubject$.subscribe((res)=>{
        // });
        //  this.commonService.asyncSubjectDemo.subscribe((res)=>{
        //     this.asyncValue = res;
        // }) 
        
        // const first  = interval(1000).pipe(map(data => "first" + (data+1)),take(4));
        // const second = interval(3000).pipe(map(data => "second" + (data+1)),take(3));
        // const third  = interval(2000).pipe(map(data => "third" + data),take(4));

        // //concat & merge
        // const commonData = concat(first,second,third);
        // const mergeData = merge(first,second,third);
        // commonData.subscribe((res)=>{
        //     console.log(res);
        // })

        // mergeData.subscribe((res)=>{
        //     console.log("merge "+res)
        // })

        //merge map
        const data = from(["john","dow", "jay"]);

        // //map
        // data.pipe(map(data => this.getValue(data))).subscribe((res)=>{
        //     res.subscribe((res)=>{
        //         console.log(res)
        //     })    
        // });

        // //map+mergeall
        // data.pipe(map(data => this.getValue(data) ),mergeAll()).subscribe((res)=>{
        //         console.log(res)    
        // });

        //mergemap
        // data.pipe(mergeMap(data => this.getValue(data))).subscribe((res)=>{
        //     console.log(res)    
        // });

        
         //concat map gives one by one result unlike merge map
        //  data.pipe(concatMap(data => this.getValue(data))).subscribe((res)=>{
        //     console.log(res)
        //  })

        //  //switch map gives only last emit value its like asyncsubject
        //  data.pipe(switchMap(data=>this.getValue(data))).subscribe((res)=>{
        //     console.log("switch")
        //     console.log(res);
        //  })

        
    }
    ngAfterViewInit(){
         //combineLatest Demo

         //observable
         const nameObs = fromEvent(this.nameValue.nativeElement , 'change').pipe( pluck('target','value'),take(3))
         const colorObs = fromEvent<any>(this.colorValue.nativeElement, 'change').pipe(map(x=>x.target.value),take(3))
        
        //  //combine Latest
        //  combineLatest(nameObs,colorObs).subscribe((res)=>{
        //     console.log("with combineLatest "+res)
        //  })

        //  //with latest from
        //  nameObs.pipe(withLatestFrom(colorObs)).subscribe((Res)=>{
        //     console.log("withlatestFrom"+Res);
        //  })

         //zip
         zip(nameObs,colorObs).pipe().subscribe((res)=>{
            console.log(res)
         })

         //forkJoin
         forkJoin(nameObs,colorObs).subscribe((Res)=>{
            console.log(Res)
         })
    }
    

    getValue(val){
            return of(val).pipe(delay(5000))
    }
    AddVideo(){
        this.commonService.addInReplySubject("video");
        this.commonService.addasyncSubjectDemo("async Demo")
    }

    changeUser1()
    {
        if(this.user1Subscribe){
            this.user1.unsubscribe()
        }
        else{
            this.user1 = this.commonService.replaySubject$.subscribe((res)=>{
                let listitem = document.createElement('li')
                listitem.append(res);
                document.getElementById('user1').appendChild(listitem);
            });
        }
        this.user1Subscribe = !this.user1Subscribe 
    }
    
    changeUser2()
    {
        if(this.user2Subscribe){
            this.user2.unsubscribe()
        }
        else{
            this.user2 = this.commonService.replaySubject$.subscribe((res)=>{
                let listitem = document.createElement('li')
                listitem.append(res);
                document.getElementById('user2').appendChild(listitem);
            });
        }
        this.user2Subscribe = !this.user2Subscribe 
    }

    asyncCompleted(){
        this.commonService.asyncSubjectDemo.complete()
    }
    ngOnDestroy(){
        this.timerSubscription.unsubscribe()
        this.intervalDemoMapSubscription.unsubscribe()
    }

}