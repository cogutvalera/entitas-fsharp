namespace ShmupWarz 

open Entitas
open System
open System.Collections.Generic

type ExpiringSystem(pool:Pool) =

    interface ISetPool with
       member this.SetPool(pool: Pool) =
            ()

    interface IExecuteSystem with
         member  this.Execute() =
            ()

