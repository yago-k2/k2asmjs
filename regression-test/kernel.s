;#define _BOOT_ORG() $0C00

;#include "defmem.inc"
;#include "global.inc"

;#define EDITOR
;#define RECORD
;#define MULTITUNE
;#define SPEECH

maxspr = 31;23;15;$f;$1f


; ** TABLES *************

org.intro_phonems=$7500


; ** ZEROPAGE ***********


zp.trg=$84 ;$fa
zp.src=$86
zp.dst=$90

zp.flcsrc=$a0
zp.flcdst=$a2

zp.umdst=$a4
zp.zseq_table=$b0

;video mem

; ** BITMAPS ************
;koala.cram=$8000
vicbnk=$0000
bitmap=$2000
screen=$0400

; ** FX Code ************ 
;zp.sort   = $02


org.main=$0d00

org.zclock=$7600

org.tabmaker=$9100;$2C00


;music.inc
;music should be played








music=$1000
music.tune=0
music.init=music
music.play=music+3
music.exit=music+6
music.multi=music+9


CYCLES_PER_FRAME=15400;15500
;19655
;17000

;This is global.inc


org.fx_stretch   = $0e00 ;$E400;

;_BOOT_ORG

;These are the default places for all our libraries and the kernel

;This file should be included from or replaced by "local.inc"

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;; The most important 256 bytes in the universe ;;;
;;;;                 ZEROPAGE                     ;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;0+1 are defined in c64.inc

;kernel and libraries
zp.signal = 2

zp.LdGZp = $03 ;
zp.LdLAE = $04 ;used by dload
zp.LdChk = $06 ;

zp.handler = 7 ;for signal-handlers

zp.useq_table = 9

zp.job = 11 ; 1 byte

;free space for effects

;other stuff, mostly used only in init
;zp.umsrc = zp.source
;zp.umdst = zp.target
;zp.source = $fc
;zp.target = $fe

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;; Real Men dont use memory Management          ;;;
;;;;                All Memory                    ;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;dload.buffer = $0400
;dload.load = $0500
;dload.install = $2000 ;only needed at init

org.boot = $0900 ;$0700
org.lib  = $0c00 ;$0c00 ;$0d20
;screen at 0c00
;bitmap at 2000

;#include <kernel/defmem.inc>

.org org.boot

;macros/dload.mac
;2005 zy/k2

;we assume a petscii-encoding!





;c64.inc inkludiert


; ** Hardware Definitionen **;
; i do not use .export, if the code uses chips, 
; it must #include <kernel/hardware.inc>



;**** Memory Management ****
pla1.ddr=0
pla1.dr=1

pla1.DEFAULT=%00110111
pla1.ddr.DEFAULT=%00101111

;are these valid?
pla1.LORAM  =%00000001
pla1.HIRAM  =%00000010
pla1.CHAREN =%00000100

pla1.RAMIO  =%00110101
pla1.KERNEL =%00110110
pla1.ALLRAM =%00110100
pla1.CHARGEN=%00111001

;**** IRQ Vectoren ****;

irq_vec = $fffe;	
nmi_vec = $fffa;

;***** CHIPS ****;

chargen=$D000


 vic =$D000
 sid =$D400
 cia1=$DC00
 cia2=$DD00


 colorram=$d800
 io1=$de00
 io2=$df00

;Video Interface Chip
;part of k2 kernel

;17. 4.2006 comments, SPRPTR
;22. 2.2015 comments update

;Usage:
;#include <kernel/c64.inc>
;#include <kernel/vic.inc>

;***** CHIP DETAILS *****

vic.s0x=vic
vic.s0y=vic|1
vic.s1x=vic|2
vic.s1y=vic|3
vic.s2x=vic|4
vic.s2y=vic|5
vic.s3x=vic|6
vic.s3y=vic|7
vic.s4x=vic|8
vic.s4y=vic|9
vic.s5x=vic|10
vic.s5y=vic|11
vic.s6x=vic|12
vic.s6y=vic|13
vic.s7x=vic|14
vic.s7y=vic|15
vic.sxmsb=vic|$10
vic.cr1=vic|$11		;control register 1
vic.raster=vic|$12
vic.lpx=vic|$13		;lightpen x position
vic.lpy=vic|$14		;lightpen y position
vic.sen=vic|$15		;sprite enable
vic.cr2=vic|$16		;control register 2
vic.sexy=vic|$17	;sprite y-expansion
vic.mem=vic|$18
vic.irq=vic|$19
vic.irqmask=vic|$1a
vic.sprio=vic|$1b	;sprite priority
vic.smcm=vic|$1c	;sprite multicolormode
vic.sexx=vic|$1d	;sprite y-expansion
vic.sscoll=vic|$1e	;sprite-sprite collision
vic.sbcoll=vic|$1f	;sprite-background collision
vic.border=vic|$20
vic.bg0=vic|$21
vic.bg1=vic|$22
vic.bg2=vic|$23
vic.bg3=vic|$24
vic.smc0=vic|$25
vic.smc1=vic|$26
vic.s0c=vic|$27
vic.s1c=vic|$28
vic.s2c=vic|$29
vic.s3c=vic|$2a
vic.s4c=vic|$2b
vic.s5c=vic|$2c
vic.s6c=vic|$2d
vic.s7c=vic|$2e

;aliases
vic.bg=vic.bg0
vic.badline=vic.cr1
vic.finescroll=vic.cr2
vic.smsb=vic.sxmsb
victoria.silvstedt=vic.sexx
terry.hatcher=vic.sexy

;some values
vic.ECM =%01000000 ;extended color mode
vic.BMM =%00100000 ;bitmap mode
vic.DEN =%00010000 ;display enable
vic.RSEL=%00001000 ;24/25 rows

vic.MCM =%00010000 ;multicolormode
vic.CSEL=%00001000 ;38/40 columns set it for 40 columns

vic.LP  =%00001000 ;lightpen interrupt
vic.SSC =%00000100 ;sprite-sprite collision
vic.SBC =%00000010 ;sprite-background collision
vic.RST =%00000001 ;raster interrupt

vic.SPRPTR=1016 ;offset from spritepointers to screen


;Sound Interface Device

;Usage:
;sid =$D400
;rsid=$D420
;lsid=sid
;#define SID() sid
;#include <kernel/sid.inc>
;#undef SID()
;#define SID() rsid
;#include <kernel/sid.inc>

sid.v1.freq=sid
sid.v1.pw=sid|2
sid.v1.ctrl=sid|4
sid.v1.ad=sid|5
sid.v1.sr=sid|6

sid.v2.freq=sid|7
sid.v2.pw=sid|9
sid.v2.ctrl=sid|11
sid.v2.ad=sid|12
sid.v2.sr=sid|13

sid.v3.freq=sid|14
sid.v3.pw=sid|16
sid.v3.ctrl=sid|18
sid.v3.ad=sid|19
sid.v3.sr=sid|20

sid.filter=sid|21
sid.res=sid|23

sid.vol=sid|$18

sid.potx=sid|$19
sid.poty=sid|$1a
sid.osc=sid|$1b
sid.env=sid|$1c

sid.LP=%00010000
sid.BP=%00100000
sid.HP=%01000000
sid.V3OFF=%10000000

mouse.xpos=sid.potx
mouse.ypos=sid.poty

;Complex Interface Adapter

;Usage:
;cia1=$dc00
;cia2=$dd00
;#define CIA() cia1
;#include <kernel/cia.inc>
;#undef CIA
;#define CIA() cia2
;#include <kernel/cia.inc>

cia1.pra=cia1	    ;port a
cia1.prb=cia1|1	    ;port b
cia1.ddra=cia1|2	    ;data direction register for port a 
cia1.ddrb=cia1|3	    ;data direction register for port b
cia1.ta=cia1|4	    ;timer a
cia1.tb=cia1|6	    ;timer b
		    ;tod=time of day		    
cia1.tod.tenth=cia1|8 ;some call it 10th
cia1.tod.seconds=cia1|9
cia1.tod.min=cia1|$a
cia1.tod.hour=cia1|$b ;some call it hr
cia1.sdr=cia1|$c	    ;serial data register
cia1.icr=cia1|$d	    ;interrupt control register
cia1.cra=cia1|$e      ;control register a
cia1.crb=cia1|$f	    ;control register b

;some aliases
cia1.pa=cia1.pra
cia1.pb=cia1.prb
cia1.timer=cia1.ta

;some values
cia1.icr.NONE= %01111111
cia1.icr.TOD=  %00000100

cia1.tod.ALARM=%10000000
cia1.tod.PAL=  %10000000 ;50/60hz switch for tod
cia1.keycol=cia1.pra
cia1.keyrow=cia1.prb
key.col=cia1.keycol
key.row=cia1.keyrow

;Complex Interface Adapter

;Usage:
;cia1=$dc00
;cia2=$dd00
;#define CIA() cia1
;#include <kernel/cia.inc>
;#undef CIA
;#define CIA() cia2
;#include <kernel/cia.inc>

cia2.pra=cia2	    ;port a
cia2.prb=cia2|1	    ;port b
cia2.ddra=cia2|2	    ;data direction register for port a 
cia2.ddrb=cia2|3	    ;data direction register for port b
cia2.ta=cia2|4	    ;timer a
cia2.tb=cia2|6	    ;timer b
		    ;tod=time of day		    
cia2.tod.tenth=cia2|8 ;some call it 10th
cia2.tod.seconds=cia2|9
cia2.tod.min=cia2|$a
cia2.tod.hour=cia2|$b ;some call it hr
cia2.sdr=cia2|$c	    ;serial data register
cia2.icr=cia2|$d	    ;interrupt control register
cia2.cra=cia2|$e      ;control register a
cia2.crb=cia2|$f	    ;control register b

;some aliases
cia2.pa=cia2.pra
cia2.pb=cia2.prb
cia2.timer=cia2.ta

;some values
cia2.icr.NONE= %01111111
cia2.icr.TOD=  %00000100

cia2.tod.ALARM=%10000000
cia2.tod.PAL=  %10000000 ;50/60hz switch for tod


joy2=cia1	
joy1=cia1|1

userport=cia2.prb
userport.ddr=cia2.ddrb


;snip


;macros/colors.mac
;2005 zy/k2

;***** FARBEN *****
;anno dazumal in kernel/hardware.inc als .export

;classes of colors:
;default color in the lower nybble, higher nybble =$?
;NO_DNC color without dnc
;UPPER_COL color in the higher nybble
;DBL_COL same color in both nybbles

;functions:
;PACKCOL(c1,c2) c1 in higher, c2 in lower nybble
;UPCOL(c1)
;maybe we should move some into nybble.mac

;maybe we whould not use ifndef/define but undef all previous definitions



;manchmal ist es sinniger, keine dnc zu benutzen!

;Aliase

;Functions











;farben inkludiert

.encoding "include/enc/petscii.enc"


; c64 kernel
; TODO: Anpassung fuer vc20/+4?
; enthaelt sehr oft gebrauchte routinen
; fuer demos

.scope kernel {


; c64 kernel initialisierung
; V2.1   11. 7.2004 AK
; V2.2   31. 3.2006 AK more manly: periodoff
; V2.2.1 18. 4.2006 AK named pla,cia
; V2.3   22.10.2006 AK emucheck,only8580
 
;scope kernel wird im hauptfile definiert!


; ** Hardware Definitionen **;
; i do not use .export, if the code uses chips, 
; it must #include <kernel/hardware.inc>


;macros/graphic.mac
;2005 zy/k2

;#include <kernel/c64.inc>






;copy _from to _to, and replaces each _empty byte with _out0, rest with _out1




;16bit position in einer bitmap, mit x<40,y<25






;NEW: subtracting vicbnk not necesary anymore
;we assume correct aligned screen and font, otherwise garbage!










;macros/periodic.mac
;2005 zy/k2
;18. 4.2006 AK named cia

;periodic.inc

;Frauen haben ihre Periode, Coder haben den CIA

;es wird novicirq aufgerufen, wenn der CIA wieder seine Tage hat




; ** Hardware Definitionen **;
; i do not use .export, if the code uses chips, 
; it must #include <kernel/hardware.inc>














	  
  .scope boot {

BG_COLOR=$0





    ;kill all operating systems!;
    
    sei;



    tsx;
    stx stackptr;

    ldx #319-256 ;why?
    txs

    ;turn off all roms;
    ;except i/o;

    lda#%111;
    sta pla1.ddr;
    lda#pla1.RAMIO
    sta pla1.dr

     sei
 lda#cia1.icr.NONE
 sta cia1.icr
 lda cia1.icr
 lda#0
 sta cia1.cra
 sta cia1.crb

    lda#cia1.icr.NONE;
    sta cia1.icr 
    sta cia2.icr
    lda cia1.icr ; ack cia1-irq
    lda cia2.icr ; ack pending nmi

    ;restore-key = reset (=restore because of debug)
    lda #<reset;
    sta nmi_vec;
    lda #>reset;
    sta nmi_vec+1;
    lda #%01111111;
    sta cia1.keycol;

;EMUCHECK



;    {
;     ldx vic.raster
;     cpx#255
;     bne _cont
;    }
;    inx
    ldx#0
    stx vic.cr1
    stx vic.border
    stx vic.irq
    stx vic.irqmask
    ldx vic.irq ;ack vic.irq



    ldx#1
    stx zp.signal ;start first part, via taskswitch-signal
    cli
    jmp idle

  }

;kernel scope wird in kernel.inc definiert


;macros/debug.mac
;2005 zy/k2
;2007 zy/k2 (removed stack-shite)




















 






BUFSIZE=16

.scope idle {
     inc vic.border
   dec vic.border


  lda zp.signal
  beq skip
  asl
  tax
  lda signal.table,x
  sta zp.handler
  lda signal.table+1,x
  sta zp.handler+1
  ldy #0
  lda (zp.handler),y
  sta smod+1
  iny
  lda (zp.handler),y
  sta smod+2

  lda #0
  sta zp.signal

smod:
  jmp _cont
  ;jmp (zp.handler) ;signal muss wieder zu idle springen
  
skip:
.export custom=*+1
  
  jmp _cont
}

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

.scope msg {
 
 ;zum uebermitteln von signalen

 .scope push {
  ;nur im irq aufrufen!
  ldx qtop
  sta ringbuffer,x
  inx  
  txa 
  and#BUFSIZE-1
  sta qtop
  rts  
 }


 ;wird staendig im irq aufgerufen

 .scope play {
  lda zp.signal
  bne _break
  ldx qbot
  cpx qtop
  beq _break
  lda ringbuffer,x
  sta zp.signal
  inx
  txa
  and #BUFSIZE-1
  sta qbot 
 } 
  rts

;testet, ob ein signal angekommen ist
 .scope sync {
  lda syncmark
  beq _break
  lda #0
  sta syncmark
  lda #1 ;es geht auch sec
 } rts

ringbuffer: 
 .buf BUFSIZE
qtop: .byte 0
qbot: .byte 0
.global syncmark: .byte 0

}
;kernel scope wird in kernel.inc definiert

;damit jobcontrol moeglich ist, muss
;irqentry(kernel.job.play) benutzt werden!
;evtl. neues irqentry-makro..

;macros/periodic.mac
;2005 zy/k2
;18. 4.2006 AK named cia

;periodic.inc

;Frauen haben ihre Periode, Coder haben den CIA

;es wird novicirq aufgerufen, wenn der CIA wieder seine Tage hat




;macros/irq.mac
;2005 zy+b0rje/k2


; push a,x,y


; pop y,x,a


;fuer den kernel:


; neuer irq an line / #line


;line ist immer immediate!


; irq im unteren teil wenn line_msb = 1


; line IS WORD


; irq im unteren teil ($d011 ora #10000000)


;irq im oberen teil


;push a,x,y, acknoledge und jump "novicirq" wenn kein rasterirq 


; pop y,x,a und rti


;if io is switched off, we need another entry/exit






;#ifndef JOBLESS








.scope job {
;#ifndef JOBLESS
 .scope init {
   lda #0
   sta zp.job
   ;sei infront may be wise
 lda#cia1.icr.NONE
 sta cia1.icr 
 lda cia1.icr

 lda#0    ;stop timer a       
 sta cia1.cra
 sta cia1.crb ;stop timer b

 lda#12000&$FF
 sta cia1.timer
 lda#(12000>8)&$FF
 sta cia1.timer+1
 lda#(12000>16)&$FF
 sta cia1.timer+2
 lda#(12000>24)&$FF
 sta cia1.timer+3
 
 lda#%00010001 ;start timer a
 sta cia1.cra

 lda#%01010001 ;start and link timer b
 sta cia1.crb      

 lda#%10000010 ;enable timer b irqs
 sta cia1.icr

;cli to enable periodic interrupts
   rts   
 }

 .scope play {
    lda#cia1.icr.NONE
 sta cia1.icr
 lda cia1.icr
 cli

      lda vic.border
   sta _debug_jobexit_smod
   lda#$6
   sta vic.border

   lda zp.job
   asl
   tax
   lda job_table,x
   sta smod
   lda job_table+1,x
   sta smod+1
  smod=*+1
   jsr nopjob
   ;sei infront may be wise
 lda#cia1.icr.NONE
 sta cia1.icr 
 lda cia1.icr

 lda#0    ;stop timer a       
 sta cia1.cra
 sta cia1.crb ;stop timer b

 lda#12000&$FF
 sta cia1.timer
 lda#(12000>8)&$FF
 sta cia1.timer+1
 lda#(12000>16)&$FF
 sta cia1.timer+2
 lda#(12000>24)&$FF
 sta cia1.timer+3
 
 lda#%00010001 ;start timer a
 sta cia1.cra

 lda#%01010001 ;start and link timer b
 sta cia1.crb      

 lda#%10000010 ;enable timer b irqs
 sta cia1.icr

;cli to enable periodic interrupts
   _debug_jobexit_smod=*+1
   lda#$??
   sta vic.border
  
   ;#ifdef VISUALPROFILER
;  dec $d020
;#endif
  pla
  tay
  pla
  tax
  pla
  rti

 }

; .scope exit {
;   periodoff
;   rts
; }
;#endif

 .scope nopjob {
   rts
 }

}
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
; task signal format:
;  .word taskswitch
;  .word routine

.scope taskswitch {

  sei
  jsr irqinit
  {
  lda #<fallbackirq;   		
  sta irq_vec;		
  lda #>fallbackirq;			
  sta irq_vec+1;	
  lda #250;
  sta vic.raster;
}
;todo: setup first irq as fallbackirq
  jsr job.init
  lda #<job.nopjob
  sta fallbackirq.frame
  lda #>job.nopjob
  sta fallbackirq.frame+1
  ldy #2
  lda (zp.handler),y
  sta smod+1
  iny
  lda (zp.handler),y
  sta smod+2
smod:
  jmp $????

}

.scope simple_taskswitch {

  sei
  ldy #2
  lda (zp.handler),y
  sta smod+1
  iny
  lda (zp.handler),y
  sta smod+2
smod:
  jmp $????

}

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;sync signal format:
;.word sync

;gibt 1 zurueck, wenn sync-signal angekommen ist, sonst 0
.scope sync {
  lda #1
  sta msg.syncmark
  {
   lda msg.syncmark
   bne _cont
  }
  jmp idle
}



.scope load {
  jmp idle;
 }




.scope pucrunch {
  jmp idle;
}


; c64 kernel runtime
; enthaelt sehr oft gebrauchte routinen fuer demos
	      
;.scope kernel wird im hauptfile definiert

;#define DEBUG


	  
  .scope keycheck {
    lda cia1|1;
    and #%00010000;
    bne return;
    
    {
      lda cia1|1;
      and #%00010000;
      beq _break;
    }
   
    lda #1;
   ; sta zp.taskswitch;
   return:
    rts;
  }


  .scope irqinit {
    sei;
    lda #1;
    sta vic.irqmask;
    lda vic.cr1;
    and #%01111111;
    sta vic.cr1;
    rts;
  }

  .scope bunjee_irq {
;TODO
;#ifdef JOBLESS
;irqentry
;else
     {
   pha;
   txa;
   pha;
   tya;
   pha;
   lda vic.irq;
   bpl w2;
   and #1;
   bne weiter;
 w2:
   jmp job.play;
 weiter:
   sta vic.irq  ;latch loeschen; 
;#ifdef VISUALPROFILER ;klappt nicht!
;   inc $d020
;#endif
 };
    jsr msg.play
    ;#ifdef VISUALPROFILER
;  dec $d020
;#endif
  pla
  tay
  pla
  tax
  pla
  rti
;
   }

  .scope fallbackirq {
     {
   pha;
   txa;
   pha;
   tya;
   pha;
   lda vic.irq;
   bpl w2;
   and #1;
   bne weiter;
 w2:
   jmp job.play;
 weiter:
   sta vic.irq  ;latch loeschen; 
;#ifdef VISUALPROFILER ;klappt nicht!
;   inc $d020
;#endif
 }
        lda vic.border
    sta _debug_irqexit_smod
    lda#$D
    sta vic.border

   .export frame=*+1
     jsr job.nopjob ;useq.play

    jsr msg.play

    inc $d020
jsr music.play
dec $d020

    jsr kernel.irqinit
    lda firstirq
    sta irq_vec
    lda firstirq+1
    sta irq_vec+1
    lda firstline
    sta vic.raster
    
    _debug_irqexit_smod=*+1
   lda#$??
   sta vic.border

    ;#ifdef VISUALPROFILER
;  dec $d020
;#endif
  pla
  tay
  pla
  tax
  pla
  rti

  .export firstirq:  .word fallbackirq
  .export firstline: .byte 250
  }

; c64 kernel reset
; enthaelt sehr oft gebrauchte routinen fuer demos
	      
;.scope kernel wird im hauptfile definiert
	  
  .scope reset {

    sei
;    php
    lda #pla1.DEFAULT
    sta pla1.dr;

    lda#%00000000;
    sta vic.irqmask;
    
;looks better for kali-demo
    sta vic.bg
    sta vic.border
    
    dec vic.irq

    lda #%10000001;
    sta cia1|13;


    
    lda #27;
    sta vic.cr1;
    
    lda#((($0400)&16383)/64)|((($1000)&16383)/1024)|%?
    sta vic.mem;
      lda #(($0000/16384)^3)
  sta cia2

    lda #$ff -16;
    and vic.cr2;
    sta vic.cr2;

    lda #0;
    sta vic.sen;


    jmp 64738 ;$fceb;   

  }
  
	  
 stackptr: 
  .byte 0;
}


.scope signal {

  .export table:
  .word $????




.export main=(*-table)/2
.word SIG_main;
.export ld_stretch=(*-table)/2
.word SIG_ld_stretch;
.export uc_stretch=(*-table)/2
.word SIG_uc_stretch;





 .export user=(*-table)/2
.word SIG_user;
 .export sync=(*-table)/2
.word SIG_sync;


}





.export SIG_main:
 .word kernel.taskswitch
 .word org.main;

.export SIG_ld_stretch:
 .word kernel.load
 .byte 11;
 .enc "stretch.puc"

.export SIG_uc_stretch:
 .word kernel.pucrunch
 .word $1000;




.export SIG_user:
 .word $0000

.export SIG_sync:
 .word kernel.sync


 .export job_table:
 .word kernel.job.nopjob
 .export nopjob=0







