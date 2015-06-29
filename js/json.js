var jsonCotizaciones=
        
{
    cliente_id:'',
    solicitud: //automovil
    {
        '_id':'',
        civi_id:'',
        placa_automovil:"",
        anocarro_automovil:"",
        poseeseguro_automovil:"",
        aseguradora_id:"", // este es si el carro esta asegurado
        fechavence_asegura:"",
        poseeblindaje_automovil:"",
        serialcarroceria_automovil:"",
        serialmotor_automovil:"",
        color_automovil:"",
        zonacirculacion_automovil:'',//estado_id -> este es estado
        transmision_automovil:"",
        estacionadiurno_automovil:"",
        estacionanocturno_automovil:"",
        debecarro_automovil:"",
        bancodebecarro_automovil:"",
        propietario_automovil:"",
        otropropietario_automovil:"",
        tipo_automovil:"", //
        uso_automovil:"",// PARTICULAR 
        tipo_cotizacion:"",
        fecha_solicitud:"",
        enviadas:
        {
                aseguradoras_id:'',
                tiempo_respuesta:'', // 0 si no hay repuesta
        },
        respuestas:
        {
                
                    aseguradoras_id:"",
                    fechavence:'',
                    cotizacion:'',
                    suma:'',
                    prima:'',
                    tasa:'',
                    prima_total:'',
                    motin_disturbios_suma:'',
                    motin_disturbios_prima:'',
                    eventos_catastroficos_suma:'',
                    eventos_catastroficos_prima:'',
                    danos_personas_suma:'',
                    danos_personas_prima:'',
                    danos_cosas_suma:'',
                    danos_cosas_prima:'',
                    exceso_limite_suma:'',
                    exceso_limite_prima:'',
                    muerte_accidental_suma:'',
                    muerte_accidental_prima:'',
                    invalidez_permanente_suma:'',
                    invalidez_permanente_prima:'',
                    gastos_medicos_suma:'',
                    gastos_medicos_prima:'',
                    defensa_penal_suma:'',
                    defensa_penal_prima:'',
                    servicio_grua_suma:'',
                    servicio_grua_prima:'',
                    indemnizacion_diaria_suma:'',
                    indemnizacion_diaria_prima:'',
                    funerario_suma:'',
                    funerario_prima:'',
                    renta_educacional_suma:'',
                    renta_educacional_prima:'',
                    odontologico_suma:'',
                    odontologico_prima:'',
                    oftalmologico_suma:'',
                    oftalmologico_prima:'',
                    accidentes_personales_suma:'',
                    accidentes_personales_prima:'',
                    atencion_medica_suma:'',
                    atencion_medica_prima:'',
                    sustitucion_vehicula_suma:'',
                    sustitucion_vehicula_prima:'',
                    contrato:'', // S,N
                    url_pdf_coti:''
        }
    }
    
}


var jsonAseguradora=
{
    '_id':'',    
    aseguradora:'',
    rif_aseguradora:'',
    nombre_corto:'',
    codigogamon:'',
    financiadora:'',
    rif_financiadora:''
}


var jsonCliente=
{
        _id:'',
        cedula_cliente:"",
        nombre_cliente:"",
        nombre2_cliente:"",
        apellido_cliente:"",
        apellido2_cliente:"",
        fechanac_cliente:"",
        genero_cliente:"", //F o M
        estadocivil_cliente:"",//  S,C,D -> SOLTERO,CASADO,DIVORCIADO 
        tlflocal_cliente:"",
        tlfcel_cliente:"",
        email_cliente:"",
        pais_cliente:"",
        nacionalidad_id:'', //default 0
        estado_id:'',  //default 0
        ciudad_id:'', //default 0
        municipio_id:'', //default 0
        parroquia_id:'', //default 0
        urbanizacion_cliente:"",
        calle_cliente:"",
        edif_cliente:"",
        piso_cliente:"",
        numerohab_cliente:"",
        tipovivienda_cliente:"",
        ocupacion_cliente:"",
        profesion_cliente:"",
        gradolicencia_cliente:"",
        actividadeconomica_cliente:"",
        ingresopromedio_cliente:"",
        patrimonio_cliente:"",
        recursospublicos_cliente:"",
        manejorecursospublicos_cliente:"",
        fuenteingreso_cliente:"",
        sitiocobro_cliente:"",
        direccioncobro:""
    
}

var jsonCivi=
{
            _id:'',
            CD_MARCA:"",
            DESC_MARCA:"",
            CD_MODELO:"",
            DESC_MODELO:"",
            CD_VERSION:"",
            DESC_VERSION:"",
            ANO_VEHICULO:"",
            N_OCUPANTES:"",
            P_VACIO:"",
            C_CARGA:"",
            VALOR:"",
            FECHA_INMA:"",
            CD_USO:"",
            DESC_USO:"",
            CD_CLASE:"",
            DESC_CLASE:"",
            CD_GRUPO:""
}