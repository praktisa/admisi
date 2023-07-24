'use client'
import React, { useState } from 'react'

export default function useCalendar(dateData: Date) {

  const [CurrentDate, setTanggal] = useState<Date>(dateData)


  function DateArrayContructor(bulan: any, tahun: any) {
    let ArrayTanggal = []
    let index = 1
    let TesTanggal = new Date(tahun, bulan, index).getDay()

    if (TesTanggal != 0) {
      index = index - TesTanggal
    }
    for (var i = 0; i < 42; i++) {
      let CreateTanggal = new Date(tahun, bulan, index).toString()
      ArrayTanggal.push(CreateTanggal)
      index++
    }
    return ArrayTanggal
  }

  function CreateCalendar() {
    let Calendar = DateArrayContructor(CurrentDate.getMonth(), CurrentDate.getFullYear())

    return Calendar
  }

  function ChangeMonth(jml: any) {

    let NewDate = new Date(CurrentDate.setMonth(CurrentDate.getMonth() + jml))
    setTanggal(NewDate)

  }

  function HeadCalendar() {
    const NamaBulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]


    let Judulkalender = NamaBulan[CurrentDate.getMonth()] + " " + CurrentDate.getFullYear()

    return Judulkalender
  }


  return {
    // value
    CurrentDate,
    HeadCalendar,
    CreateCalendar,

    // function 
    ChangeMonth
  }
}
