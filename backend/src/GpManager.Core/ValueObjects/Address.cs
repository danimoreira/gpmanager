using System;
using System.Collections.Generic;
using Abp.Domain.Values;

namespace GpManager.ValueObjects
{
    public class Address : ValueObject
    {
        public const int MaxStreetLength = 300;
        public const int MaxCityLength = 50;
        public const int MaxStateLength = 2;
        public const int MaxZipCodeLength = 10;

        public string Street { get; set; }
        public string Number { get; set; }
        public string Complement { get; set; }
        public string District { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string ZipCode { get; set; }

        protected override IEnumerable<object> GetAtomicValues()
        {
            yield return Street;
            yield return Number;
            yield return Complement;
            yield return District;
            yield return City;
            yield return State;
            yield return ZipCode;
        }

        public Address() {}

        public Address(string street, string number, string complement, string district, string city, string state, string zipCode)
        {
            Street = street;
            Number = number;
            Complement = complement;
            District = district;
            City = city;
            State = state;
            ZipCode = zipCode;
        }
    }
}